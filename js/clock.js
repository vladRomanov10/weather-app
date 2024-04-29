const currentTime = document.getElementById('currentTime')

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
const setIntervalId = setInterval(getCurrentTime, 1000)

window.addEventListener('unload', () => {
    clearInterval(setIntervalId)
})