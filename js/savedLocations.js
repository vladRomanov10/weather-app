const CITIES_SELECT = document.getElementById('selected-cities')
const LIKE_BUTTON = document.getElementById('like-button')

//В данную переменную записывается запрашиваемый город, при выполнении функции displayData
let currentCity

//Добавление города в список сохраненных городов
const ADD_CITY = (city) => {
    
    // создаем новый элемент option
    const newOption = document.createElement('option')

    //прописываем в этот option текущий город
    newOption.value = city
    newOption.text = city
    newOption.className = 'locations__item-city'

    // добовляем в элемент select нового ребенка option со значением текущего города
    CITIES_SELECT.appendChild(newOption)
    
    //добавляем сохраненный город в массив, где хранятся сохраненные города
    ADDED_LOCATIONS.push(city)
    
    //Сохраняем в localStorage массив городов
    localStorage.setItem('addedLocations', JSON.stringify(ADDED_LOCATIONS))
}

//оборачиваем функцию для добавления в обработчик событий
const CLICK_HANDLER = () => ADD_CITY(currentCity)
//отображение погоды города из списка сохранненых городов
const DISPLAY_CITY_FROM_LIST = () => {

    //Сохраняем в переменную значение активного option
    const selectedValue = event.target.value

    GET_DATA(`${API_KEY}${selectedValue}`)
        .then(data => DISPLAY_DATA(data))
}


// //Слушатель кнопки в избранное
LIKE_BUTTON.addEventListener('click', CLICK_HANDLER)

//Слушатель списка добавленных городов
CITIES_SELECT.addEventListener('change', DISPLAY_CITY_FROM_LIST)