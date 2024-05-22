//Массив, в который будем сохранять добавленные города
const ADDED_LOCATIONS = []

//Получение строки из localStorage
const LOCAL_STORAGE_DATA = localStorage.getItem('addedLocations')

//Преобразование строки в массив
const ADDED_LOCATIONS_ARRAY = JSON.parse(LOCAL_STORAGE_DATA)

//Добавляем города из массива в список сохраненных городов

if (ADDED_LOCATIONS_ARRAY !== null) {
    
    ADDED_LOCATIONS_ARRAY.forEach(el => ADD_CITY(el))
}
