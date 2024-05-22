const CURRENT_TIME = document.getElementById('currentTime')
//Получаем текущее время
const GET_CURRENT_TIME = () => {

    const data = new Date()
    let hour = data.getHours().toString()
    let minutes = data.getMinutes().toString()
    let seconds = data.getSeconds().toString()
    
    if (hour.length < 2) {
        hour = '0' + hour
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes
    }

    if(seconds.length < 2) {
        seconds = '0' + seconds
    }
    CURRENT_TIME.innerHTML = `${hour}:${minutes}:${seconds}`
}

GET_CURRENT_TIME()
//Отрисовываем текущее время каждую секунду
let setIntervalId = setInterval(GET_CURRENT_TIME, 1000)


