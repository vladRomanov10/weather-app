document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(setIntervalId)
        LIKE_BUTTON.removeEventListener('click', CLICK_HANDLER)
        CITIES_SELECT.removeEventListener('change', DISPLAY_CITY_FROM_LIST)
    } else {
        setIntervalId = setInterval(GET_CURRENT_TIME, 1000)
        CITIES_SELECT.addEventListener('change', DISPLAY_CITY_FROM_LIST)
        LIKE_BUTTON.addEventListener('click', CLICK_HANDLER)
    }
})