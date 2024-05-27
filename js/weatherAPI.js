//search form
const form = document.getElementById('search-form')
const input = document.getElementById('search-input')

//tab-now
const temp = document.querySelectorAll('[data-id="cityTemp"]')
const condition = document.querySelectorAll('[data-id="condition"]')
const city = document.querySelectorAll('[data-id="cityName"]')
const conditionIcon = document.querySelectorAll('[data-id="conditionIcon"]')

//tab-details
const feelsLike = document.querySelectorAll('[data-id="feelsLike"]')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

const API_KEY = 'https://api.weatherapi.com/v1/forecast.json?key=ac98d4897b7a49ce89972652242504&q='
const DEFAULT_CITY = 'Almaty'


//а.ф. для запроса погоды на сервер
const getData = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    //для удобстава разработки вывожу объект с погодой в консоль
    console.log(data)
    return data
}
// Функция для отображения данных с сервера на странице
const displayNowTab = (data) => {
    
    //У меня есть несколько элементов на странице, где нужно отображать одно и тоже (название города, температуру и тд.). 
    //В переменную temp я сохранил все элементы, через которые нужно отображать температуру в виде nodeList. И далее 
    // прошелся с помощью forEach по этим элементам и отрисовал их
    temp.forEach((el) => {
        el.innerHTML = `${Math.floor(data.current.temp_c)}`
    })

    condition.forEach((el) => {
        el.innerHTML = `${data.current.condition.text}`
    })

    city.forEach((el) => {
        el.innerHTML = `${data.location.name}`
    })

    conditionIcon.forEach((el) => {
        el.src = `https:${data.current.condition.icon}`
    })

    feelsLike.forEach((el) => {
        el.innerHTML = `${Math.floor(data.current.feelslike_c)}`
    })

    humidity.innerHTML = `${data.current.humidity}`

    wind.innerHTML = `${data.current.wind_kph}`

    currentCity = data.location.name
}

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
//Запрос на сервер погоды, для получения дефолтного города, который мы вручную прописали в коде
displayData(DEFAULT_CITY)

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
