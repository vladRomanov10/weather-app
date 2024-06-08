const temp = document.querySelectorAll('[data-id="cityTemp"]')
const condition = document.querySelectorAll('[data-id="condition"]')
const city = document.querySelectorAll('[data-id="cityName"]')
const conditionIcon = document.getElementById('conditionIcon')
const feelsLike = document.getElementById('feelsLike')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')

//Функция для отображения погоды на табах now и details
const displayNowDetailsTabs = (data) => {

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

    conditionIcon.src = `https:${data.current.condition.icon}`

    feelsLike.innerHTML = `${Math.floor(data.current.feelslike_c)}`

    humidity.innerHTML = `${data.current.humidity}`

    wind.innerHTML = `${data.current.wind_kph}`

    CURRENT_CITY = data.location.name
    
    //Проверка на то, какую иконку лайка ставить. Если город уже есть в списке сохраненных, то закрашенный
    if (isCityInList(CURRENT_CITY)) {
        favouriteCityIcon.src = favouriteCityColorIcon
    } else {
        favouriteCityIcon.src = favouriteCityTransparentIcon
    }
}

//При загрузке приложения, нужно отображать дефолтный город в приложении, что бы не было пусто
//Запрос на сервер погоды, для получения дефолтного города, который мы вручную прописали в коде
displayData(CURRENT_CITY)