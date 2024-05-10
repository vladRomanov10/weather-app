const form = document.getElementById('search-form')
const input = document.getElementById('search-input')
const temp = document.getElementById('cityTemperature')
const condition = document.getElementById('condition')
const city = document.getElementById('city')

const apiKey = 'https://api.weatherapi.com/v1/current.json?key=ac98d4897b7a49ce89972652242504&q='
const defaultCity = 'Almaty&aqi=yes'


//а.ф. для запроса погоды на сервер
const getCityWeather = async(url) => {
    const res = await fetch(url)
    return await res.json()
}

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
//Запрос на сервер погоды, для получения дефолтного города, который мы вручную прописали в коде
getCityWeather(`${apiKey}${defaultCity}`)
    .then((data) => {
        temp.innerHTML = `${data.current.temp_c}`
        condition.innerHTML = `${data.current.condition.text}`
        city.innerHTML = `${data.location.name}`
    })

// Подписываемся на форму в нашем приложении, что бы отправить запрос на сервер и получить данные по вписаному городу
form.onsubmit = (event) => {
    //при нажатии на <button> происходит отправка формы и вследствии обновление страницы
    //с помощью preventDefault отменяем отправку формы, что бы не происходило обновление страницы
    event.preventDefault()
    
    //метод trim обрезает пробелы по бокам от вводимого слова
    let inputValue = input.value.trim() + '&aqi=yes'
    // Чистим поле ввода
    input.value = ''
    
    getCityWeather(`${apiKey}${inputValue}`)
        .then((data) => {
            temp.innerHTML = `${data.current.temp_c}`
            condition.innerHTML = `${data.current.condition.text}`
            city.innerHTML = `${data.location.name}`
        })
        .catch(error => alert('Some error occurred, please try again'))
}
