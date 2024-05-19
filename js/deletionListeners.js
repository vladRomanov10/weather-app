document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(setIntervalId)
        likeButton.removeEventListener('click', addCity)
        citySelect.removeEventListener('change', displayCityFromList)
    } else {
        setIntervalId = setInterval(getCurrentTime, 1000)
        likeButton.addEventListener('click', addCity)
        citySelect.addEventListener('change', displayCityFromList)
    }
})