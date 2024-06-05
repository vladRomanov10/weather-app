const widgetsWrap = document.getElementById('widgets')

const displayForecastTab = (data) => {
    
    //Получаем дату запрашиваемого города
    const localData = new Date(data.location.localtime)
    const localHour = localData.getHours()
    const localDayMonth = `${localData.getDate()} ${localData.toLocaleString('default', {month: 'long'})}`
    
    //Подсчет колличества карточек с почасовой погодой (каждые 3 часа), которое нужно отрисовать
    const widgetsCount = Math.ceil((24 - localHour) / 3)
    
    //Удаление карточек с почасовой погодой предыдущего города
    widgetsWrap.replaceChildren()
    
    // Счетчик, который контролирует, на какой час будет показываться погода в карточке, 0 - текущий час, 1 - +1 от текущего часа и тд.
    let counter = 0
    
    // Цикл, который генерирует и рисует карточки
    for (let i = widgetsCount; i > 0; i--) {
        
        //Создаем ссылку, которая ведет нас к погоде в запрашеваеммый час
        const hourWeather = data.forecast.forecastday[0].hour[localHour + counter]
        
        const hourWeatherTemp = Math.floor(hourWeather.temp_c)
        const hourWeatherFeels = Math.floor(hourWeather.feelslike_c)
        
        //Час, на который отображается погода
        const currentHour = `${localHour + counter}:00`
        
        const widgetCard = `<div class="forecast-widget">
                        <div class="forecast-widget__date-temp">
                            <p class="forecast-widget__date">${localDayMonth}</p>
                            <div class="forecast-widget__flex-wrap">
                                <p class="forecast-widget__temperature">Temperature:</p>
                                <p class="forecast-widget__temperature">${hourWeatherTemp}</p>
                                <p class="forecast-widget__degree-symbol">°</p>
                            </div>
                            <div class="forecast-widget__flex-wrap">
                                <p class="forecast-widget__feels-like" >Feels like:</p>
                                <p class="forecast-widget__feels-like">${hourWeatherFeels}</p>
                                <p class="forecast-widget__degree-symbol">°</p>
                            </div>
                        </div>
                        <div class="forecast-widget__time-cond">
                            <p class="forecast-widget__time">${currentHour}</p>
                            <p class="forecast-widget__condition">${hourWeather.condition.text}</p>
                            <img class="forecast-widget__icon" src="${hourWeather.condition.icon}" alt="Condition icon">
                        </div>
                    </div>`
        
        // По логике, каждая последующая карточка, показывает погоду на +3 часа вперед
        counter +=3
        
        widgetsWrap.innerHTML += widgetCard
    }
}

