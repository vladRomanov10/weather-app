const FORM = document.getElementById('search-form')
const INPUT = document.getElementById('search-input')
const TEMP = document.querySelectorAll('[data-id="cityTemp"]')
const CONDITION = document.querySelectorAll('[data-id="condition"]')
const CITY = document.querySelectorAll('[data-id="cityName"]')
const CONDITION_ICON = document.getElementById('condition-icon')
const FEELS_LIKE = document.getElementById('feelsLike')
const HUMIDITY = document.getElementById('humidity')
const WIND = document.getElementById('wind')

const API_KEY = 'https://api.weatherapi.com/v1/current.json?key=ac98d4897b7a49ce89972652242504&q='
const DEFAULT_CITY = 'Almaty'


//а.ф. для запроса погоды на сервер
const GET_DATA = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    //для удобстава разработки вывожу объект с погодой в консоль
    console.log(data)
    return data
}
// Функция для отображения данных с сервера на странице
const DISPLAY_DATA = (data) => {
    
    //У меня есть несколько элементов на странице, где нужно отображать одно и тоже (название города, температуру и тд.). 
    //В переменную temp я сохранил все элементы, через которые нужно отображать температуру в виде nodeList. И далее 
    // прошелся с помощью forEach по этим элементам и отрисовал их
    TEMP.forEach((el) => {
        el.innerHTML = `${data.current.temp_c}`
    })

    CONDITION.forEach((el) => {
        el.innerHTML = `${data.current.condition.text}`
    })

    CITY.forEach((el) => {
        el.innerHTML = `${data.location.name}`
    })

    CONDITION_ICON.src = `https:${data.current.condition.icon}`

    FEELS_LIKE.innerHTML = `${data.current.feelslike_c}`

    HUMIDITY.innerHTML = `${data.current.humidity}`

    WIND.innerHTML = `${data.current.wind_kph}`
    
    currentCity = data.location.name
}

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
//Запрос на сервер погоды, для получения дефолтного города, который мы вручную прописали в коде
GET_DATA(`${API_KEY}${DEFAULT_CITY}`)
    .then(data => DISPLAY_DATA(data))
    .catch(err => alert('Sorry, something went wrong. Please try again'))

// Подписываемся на форму в нашем приложении, что бы отправить запрос на сервер и получить данные по вписаному городу
FORM.onsubmit = (event) => {
    //при нажатии на <button> происходит отправка формы и вследствии обновление страницы
    //с помощью preventDefault отменяем отправку формы, что бы не происходило обновление страницы
    event.preventDefault()
    
    //метод trim обрезает пробелы по бокам от вводимого слова
    let inputValue = INPUT.value.trim()
    // Чистим поле ввода
    INPUT.value = ''

    GET_DATA(`${API_KEY}${inputValue}`)
        .then(data => DISPLAY_DATA(data))
        .catch(err => alert('Sorry, something went wrong. Please try again'))
}
