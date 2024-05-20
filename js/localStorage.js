//Массив, в который будем сохранять добавленные города
let addedLocations = []

//Получение строки из localStorage
const localStorageData = localStorage.getItem('addedLocations')

//Преобразование строки в массив
const addedLocationsArray = JSON.parse(localStorageData)

//Добавляем города из массива в список сохраненных городов

addedLocationsArray.forEach((el) => {

    const newOption = document.createElement('option')
    
    newOption.value = el
    newOption.text = el
    newOption.className = 'locations__item-city'
    
    citySelect.appendChild(newOption)
    
    //Добавляем города из localStorage в текущий массив добавленных городов
    addedLocations.push(el)
})
