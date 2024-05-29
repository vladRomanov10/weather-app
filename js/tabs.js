const tabs = document.querySelectorAll('.tabs__item')
    
//Функция, удаляющая класс .widget_hide
const classHideRemove = () => document.querySelectorAll('.widget_hide').forEach(el => {
    el.classList.remove('widget_hide')
})

//Функция, добовляющая класс widget_hide для элементов, которые необходимо скрыть
const classHideAdd = (class1, class2) => document.querySelectorAll(`${class1}, ${class2}`).forEach(el => {
    el.classList.add('widget_hide')
})

//Обработчик клика на таб
const tabClickHandler = (event) => {
    
    //Находим активный таб и убираем класс активная активный таб
    document.querySelector('.tabs_active').classList.remove('tabs_active')

    //Добавляем класс активный таб на таб по которому кликнули
    event.target.classList.add('tabs_active')

    //отображение контента соответсвующего кликнутому табу
    switch (event.target.id) {

        case 'tabNow':
            classHideRemove()
            classHideAdd('.tab-details', '.tab-forecast')
            break

        case 'tabDetails':
            classHideRemove()
            classHideAdd('.tab-now', '.tab-forecast')
            break

        case 'tabForecast':
            classHideRemove()
            classHideAdd('.tab-now', '.tab-details')
            break
    }
}

//Вешаем обработчик кликов на табы
tabs.forEach((el) => {
    el.addEventListener('click', tabClickHandler)
})