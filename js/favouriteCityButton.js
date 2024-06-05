const favouriteCityButton = document.getElementById('like-button')
const favouriteCityIcon = document.getElementById('like-pic')
const favouriteCityTransparentIcon = 'assets/images/like.png'
const favouriteCityColorIcon = 'assets/images/likeColor.png'

//Функция, проверяющая, есть ли запрашиваемый город в списке сохраненных городов
let isCityInList = () => addedLocations.includes(CURRENT_CITY)

//Добавление города в список сохраненных городов по клику сердечка
const addCity = (city) => {

    //Проверка на то, есть ли выбранный город уже в списке 
    if (isCityInList()) {
        deleteCityFromList()
        return
    }

    //Смена иконки лайка
    favouriteCityIcon.src = favouriteCityColorIcon

    // создаем новый элемент option
    const newOption = document.createElement('option')

    //прописываем в этот option текущий город
    //Удаляем пробелы из атрибута value (для городов из 2 и более слов)
    newOption.value = city.replaceAll(' ','')
    newOption.text = city
    newOption.className = 'locations__item-city'

    CURRENT_CITY_VALUE = newOption.value

    // добовляем в элемент select нового ребенка option со значением текущего города
    selectedCities.appendChild(newOption)

    //добавляем сохраненный город в массив, где хранятся сохраненные города
    addedLocations.push(city)

    //Сохраняем в localStorage массив городов
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

//оборачиваем функцию для добавления в обработчик событий
const clickHandler = () => addCity(CURRENT_CITY)

//Слушатель кнопки в избранное
favouriteCityButton.addEventListener('click', clickHandler)

