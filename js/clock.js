const currentTime = document.getElementById('currentTime')
//Получаем текущее время
const getCurrentTime = () => {

    const data = new Date()
    let hour = data.getHours().toString()
    let minutes = data.getMinutes().toString()
    let seconds = data.getSeconds()
    
    if (hour.length < 2) {
        hour = '0' + hour
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes
    }

    document.getElementById('currentTime').innerHTML = `${hour}:${minutes}:${seconds}`
}

getCurrentTime()
//Отрисовываем текущее время каждую секунду
let setIntervalId = setInterval(getCurrentTime, 1000)
//Проверяем активна ли вкладка в браузере, если нет, отключаем время
//если пользователь вернулся на вкладку, запускаем время
//отключение отсчета времени работает, только при первом переходе из вкладки
//при втором переходе, время продолжает идти, хотя вкладка неактивна
const isPageVisibility = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(setIntervalId)
        } else {
            setIntervalId = setInterval(getCurrentTime, 1000)
        }
    })
}

setInterval(isPageVisibility, 1000)