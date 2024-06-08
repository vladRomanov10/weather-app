//Массив, в который будем сохранять добавленные города через кнопку лайк
let addedLocations = []

//Для сохранения списка городов пользователя, используем localStorage. Получаем список город из localStorage
const localStorageData = localStorage.getItem('addedLocations')

//Преобразование строки в массив
const localStorageDataArray = JSON.parse(localStorageData)

//Добавляем города из localStorage в список сохраненных городов
if (localStorageDataArray) {
    
    localStorageDataArray.forEach(el => addCity(el))
}
