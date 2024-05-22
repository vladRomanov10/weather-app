const delListeners = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(setIntervalId)
            likeButton.removeEventListener('click', clickHandler)
            citiesSelect.removeEventListener('change', displayCityFromList)
        } else {
            setIntervalId = setInterval(getCurrentTime, 1000)
            citiesSelect.addEventListener('change', displayCityFromList)
            likeButton.addEventListener('click', clickHandler)
        }
    })
}