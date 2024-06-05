//Массив, в который будем сохранять добавленные города через кнопку лайк
let addedLocations = []

//Для сохранения списка городов пользователя, используем localStorage. Получаем список город из localStorage
const localStorageData = localStorage.getItem('addedLocations')

//Преобразование строки в массив
const addedLocationsArray = JSON.parse(localStorageData)

//Отрисовываем города из localStorage

if (addedLocationsArray !== null) {
    
    addedLocationsArray.forEach(el => addCity(el))
}
