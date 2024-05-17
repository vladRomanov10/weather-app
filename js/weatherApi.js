const form = document.getElementById('search-form')
const input = document.getElementById('search-input')
const temp = document.getElementById('cityTemperature')
const condition = document.getElementById('condition')
const city = document.getElementById('city')
const conditionIcon = document.getElementById('condition-icon')

const apiKey = 'https://api.weatherapi.com/v1/current.json?key=ac98d4897b7a49ce89972652242504&q='
const defaultCity = 'Almaty'


//а.ф. для запроса погоды на сервер
const getData = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    //для удобстава разработки вывожу объект с погодой в консоль
    console.log(data)
    return data
}
// Функция для отображения данных с сервера на странице
const displayData = (data) => {
    temp.innerHTML = `${data.current.temp_c}`
    condition.innerHTML = `${data.current.condition.text}`
    city.innerHTML = `${data.location.name}`
    conditionIcon.src = `https:${data.current.condition.icon}`
    currentCity = data.location.name
}

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
//Запрос на сервер погоды, для получения дефолтного города, который мы вручную прописали в коде
getData(`${apiKey}${defaultCity}`)
    .then(data => displayData(data))

// Подписываемся на форму в нашем приложении, что бы отправить запрос на сервер и получить данные по вписаному городу
form.onsubmit = (event) => {
    //при нажатии на <button> происходит отправка формы и вследствии обновление страницы
    //с помощью preventDefault отменяем отправку формы, что бы не происходило обновление страницы
    event.preventDefault()
    
    //метод trim обрезает пробелы по бокам от вводимого слова
    let inputValue = input.value.trim()
    // Чистим поле ввода
    input.value = ''

    getData(`${apiKey}${inputValue}`)
        .then(data => displayData(data))
}
