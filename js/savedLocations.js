const selectedCities = document.getElementById('selected-cities')

//отображение погоды города из списка сохранненых городов
const displayCityFromList = (event) => {

    //Сохраняем в переменную CURRENT_CITY text выбранного option, по которому состовляется ссылка для запроса к API
    CURRENT_CITY = event.target.textContent
    
    //Сохраняем в переменную CURRENT_CITY_VALUE value выбранного option, для последующей возможности удаления из списка
    CURRENT_CITY_VALUE = event.target.value
    
    displayData(CURRENT_CITY)
}

//Слушатель списка добавленных городов
selectedCities.addEventListener('change', displayCityFromList)
