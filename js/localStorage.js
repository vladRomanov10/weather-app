//Массив, в который будем сохранять добавленные города
const addedLocations = []

//Получение строки из localStorage
const localStorageData = localStorage.getItem('addedLocations')

//Преобразование строки в массив
const addedLocationsArray = JSON.parse(localStorageData)

//Добавляем города из массива в список сохраненных городов

if (addedLocationsArray !== null) {
    
    addedLocationsArray.forEach(el => addCity(el))
}
