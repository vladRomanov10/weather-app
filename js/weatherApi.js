// Остановился на том, что реализовал апи так, что бы при загрузке приложения, сразу подгружался город алматы
// нужно теперь сделать отрисовку температуры, облочков и самого города
const apiKey = 'ac98d4897b7a49ce89972652242504'

const form = document.getElementById('search-form')
const input = document.getElementById('search-input')

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
let cityWeather

const defaultUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Almaty&aqi=yes`

fetch(defaultUrl)
    .then(response => response.json())
    .then(json => cityWeather = json)

// Подписываемся на форму
form.onsubmit = (event) => {
    //при нажатии на <button> происходит отправка формы и вследствии обновление страницы
    //с помощью preventDefault отменяем отправку формы
    event.preventDefault()
    
    //метод trim обрезает пробелы по бокам от вводимого слова
    let city = input.value.trim()
    
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`

    fetch(url)
        .then(response => response.json())
        .then(json => cityWeather = json)
}

