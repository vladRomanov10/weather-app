//Блок находится на стадии разработки
const isDevelopmentMode = true

const day = document.querySelectorAll('[data-id="day"]')
const time = document.getElementById('time')

const displayForecastTab = (data) => {

    //Получаем дату запрашиваемого города
    const localData = new Date(data.location.localtime)
    const localHour = localData.getHours()
    let widgetsCount = Math.ceil((24 - localHour) / 3)
    console.log(widgetsCount)
    day.forEach((el) => {
        el.innerHTML = `${localData.getDate()} ${localData.toLocaleString('default', {month: 'long'})}`
    })
}

