// Функция для отображения данных с сервера на странице
const displayData = (city, api = API_KEY) => {
    getData(`${api}${city}`)
        .then(data => {
            displayNowDetailsTabs(data)
            return data
        })
        .then(data => {
            if (!IS_DEVELOPMENT_MODE) {
                displayForecastTab(data)
            }
        })
        .catch(err => alert('Sorry, something went wrong. Please try again'))
}