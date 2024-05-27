//Цикл для добавления виджетов
//    day.forEach((el) => {
//         el.innerHTML = `${localData.getDate()} ${localData.toLocaleString('default', {month: 'long'})}`
//     })
//     
//    //Получаем дату запрашиваемого города
//     const localData = new Date(data.location.localtime)
//     localHour = localData.getHours()
//     console.log(localData.getHours())
//tab-forecast
const day = document.querySelectorAll('[data-id="day"]')
const time = document.getElementById('time')

const displayForecastTab = (data) => {
    
    //Получаем дату запрашиваемого города
    const localData = new Date(data.location.localtime)
    const localHour = localData.getHours()
    let widgetsCount = Math.ceil((24 - localHour) / 3)
    console.log(widgetsCount)
}

