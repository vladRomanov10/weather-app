const getCurrentTime = () => {

    const data = new Date()
    let hour = data.getHours().toString()
    let minutes = data.getMinutes().toString()

    if (hour.length < 2) {
        hour = '0' + hour
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes
    }

    return `${hour}:${minutes}`
}
