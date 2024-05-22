const citiesSelect = document.getElementById('selected-cities')
const likeButton = document.getElementById('like-button')

//В данную переменную записывается запрашиваемый город, при выполнении функции displayData
let currentCity

//Добавление города в список сохраненных городов
const addCity = (city) => {
    
    // создаем новый элемент option
    const newOption = document.createElement('option')

    //прописываем в этот option текущий город
    newOption.value = city
    newOption.text = city
    newOption.className = 'locations__item-city'

    // добовляем в элемент select нового ребенка option со значением текущего города
    citiesSelect.appendChild(newOption)
    
    //добавляем сохраненный город в массив, где хранятся сохраненные города
    addedLocations.push(city)
    
    //Сохраняем в localStorage массив городов
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

//оборачиваем функцию для добавления в обработчик событий
const clickHandler = () => addCity(currentCity)

//отображение погоды города из списка сохранненых городов
const displayCityFromList = () => {

    //Сохраняем в переменную значение активного option
    const selectedValue = event.target.value

    getData(`${CURRENT_API_KEY}${selectedValue}`)
        .then(data => displayData(data))
        .catch(err => alert('Sorry, something went wrong. Please try again'))
}


// //Слушатель кнопки в избранное
likeButton.addEventListener('click', clickHandler)

//Слушатель списка добавленных городов
citiesSelect.addEventListener('change', displayCityFromList)

//Удаление слушателей при неактивной вкладке
delListeners()