const form = document.getElementById('search-form')
const input = document.getElementById('search-input')

// Подписываемся на форму в нашем приложении, что бы отправить запрос на сервер и получить данные по вписаному городу
form.onsubmit = (event) => {
    //при нажатии на <button> происходит отправка формы и вследствии обновление страницы
    //с помощью preventDefault отменяем отправку формы, что бы не происходило обновление страницы
    event.preventDefault()

    //метод trim обрезает пробелы по бокам от вводимого слова
    let inputValue = input.value.trim()
    // Чистим поле ввода
    input.value = ''

    displayData(inputValue)
}