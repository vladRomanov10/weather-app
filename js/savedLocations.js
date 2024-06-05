const selectedCities = document.getElementById('selected-cities')

//Добавление города в список сохраненных городов
const addCity = (city) => {

    //Проверка на то, есть ли уже выбранный город в списке 
    if (isCityInList()) {
        deleteCityFromList()
        return
    }

    //Смена иконки лайка
    favouriteCityIcon.src = favouriteCityColorIcon
    
    // создаем новый элемент option
    const newOption = document.createElement('option')

    //прописываем в этот option текущий город
    newOption.value = city
    newOption.text = city
    newOption.className = 'locations__item-city'

    // добовляем в элемент select нового ребенка option со значением текущего города
    selectedCities.appendChild(newOption)
    
    //добавляем сохраненный город в массив, где хранятся сохраненные города
    addedLocations.push(city)
    
    //Сохраняем в localStorage массив городов
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
    
}

//оборачиваем функцию для добавления в обработчик событий
const clickHandler = () => addCity(CURRENT_CITY)

//отображение погоды города из списка сохранненых городов
const displayCityFromList = (event) => {

    //Сохраняем в переменную значение активного option
    CURRENT_CITY = event.target.value
    
    displayData(CURRENT_CITY)
}
// //Слушатель кнопки в избранное
favouriteCityButton.addEventListener('click', clickHandler)

//Слушатель списка добавленных городов
selectedCities.addEventListener('change', displayCityFromList)

//Удаление слушателей при неактивной вкладке
delListeners()