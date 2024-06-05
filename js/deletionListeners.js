const delListeners = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            
            clearInterval(setIntervalId)
            likeButton.removeEventListener('click', clickHandler)
            citiesSelect.removeEventListener('change', displayCityFromList)
            tabs.forEach((el) => {
                el.removeEventListener('click', tabClickHandler)
            })
            deleteCityButton.removeEventListener('click', deleteClickHandler)
            
        } else {
            
            setIntervalId = setInterval(getCurrentTime, 1000)
            citiesSelect.addEventListener('change', displayCityFromList)
            likeButton.addEventListener('click', clickHandler)
            tabs.forEach((el) => {
                el.addEventListener('click', tabClickHandler)
            })
            deleteCityButton.addEventListener('click', deleteClickHandler)
        }
    })
}