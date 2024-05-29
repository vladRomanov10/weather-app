const delListeners = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(setIntervalId)
            likeButton.removeEventListener('click', clickHandler)
            citiesSelect.removeEventListener('change', displayCityFromList)
            tabs.forEach((el) => {
                el.removeEventListener('click', tabClickHandler)
            })
        } else {
            setIntervalId = setInterval(getCurrentTime, 1000)
            citiesSelect.addEventListener('change', displayCityFromList)
            likeButton.addEventListener('click', clickHandler)
            tabs.forEach((el) => {
                el.addEventListener('click', tabClickHandler)
            })
        }
    })
}