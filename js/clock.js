const currentTime = document.getElementById('currentTime')
//Получаем текущее время
const getCurrentTime = () => {

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
    currentTime.innerHTML = `${hour}:${minutes}:${seconds}`
}

getCurrentTime()
//Отрисовываем текущее время каждую секунду
let setIntervalId = setInterval(getCurrentTime, 1000)


