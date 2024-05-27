const displayData = (city, api = API_KEY,) => {
    getData(`${api}${city}`)
        .then(data => {
            displayNowTab(data)
            return data
        })
        .then(data => displayForecastTab(data))
        .catch(err => alert('Sorry, something went wrong. Please try again'))
}