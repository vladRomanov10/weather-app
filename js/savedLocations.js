const citySelect = document.getElementById('selected-cities')
const likeButton = document.getElementById('like-button')

//В данную переменную записывается запрашиваемый город, при выполнении функции displayData
let currentCity

//Слушатель кнопки в избранное
likeButton.addEventListener('click', () => {
    // создаем новый элемент option
    const newOption = document.createElement('option')
    
    //прописываем в этот option текущий город
    newOption.value = `${currentCity}`
    newOption.text = `${currentCity}`
    
    // добовляем в элемент select нового ребенка option со значением текущего города
    citySelect.appendChild(newOption)}
)


//Слушатель списка добавленных городов
citySelect.addEventListener('change', (event) => {
    
    //Сохраняем в переменную значение активного option
    const selectedValue = event.target.value
    
    getData(`${apiKey}${selectedValue}`)
        .then(data => displayData(data))
})