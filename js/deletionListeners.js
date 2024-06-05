const delListeners = () => {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            
            clearInterval(setIntervalId)
            favouriteCityButton.removeEventListener('click', clickHandler)
            selectedCities.removeEventListener('change', displayCityFromList)
            tabs.forEach((el) => {
                el.removeEventListener('click', tabClickHandler)
            })
            deleteCityButton.removeEventListener('click', deleteCityFromList)
            
        } else {
            
            setIntervalId = setInterval(getCurrentTime, 1000)
            selectedCities.addEventListener('change', displayCityFromList)
            favouriteCityButton.addEventListener('click', clickHandler)
            tabs.forEach((el) => {
                el.addEventListener('click', tabClickHandler)
            })
            deleteCityButton.addEventListener('click', deleteCityFromList)
        }
    })
}