const citySelect = document.getElementById('selected-cities')
const likeButton = document.getElementById('like-button')

//В данную переменную записывается запрашиваемый город, при выполнении функции displayData
let currentCity

//Добавление города в список сохраненных городов
const addCity = () => {
    
    // создаем новый элемент option
    const newOption = document.createElement('option')

    //прописываем в этот option текущий город
    newOption.value = `${currentCity}`
    newOption.text = `${currentCity}`
    newOption.className = 'locations__item-city'

    // добовляем в элемент select нового ребенка option со значением текущего города
    citySelect.appendChild(newOption)
    
    //добавляем сохраненный город в массив для localStorage
    addedLocations.push(currentCity)
    
    //Сохраняем в localStorage массив городов
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

//отображение погоды города из списка сохранненых городов
const displayCityFromList = () => {

    //Сохраняем в переменную значение активного option
    const selectedValue = event.target.value

    getData(`${apiKey}${selectedValue}`)
        .then(data => displayData(data))
}

// //Слушатель кнопки в избранное
likeButton.addEventListener('click', addCity)

//Слушатель списка добавленных городов
citySelect.addEventListener('change', displayCityFromList)