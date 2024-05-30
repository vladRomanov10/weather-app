const tabs = document.querySelectorAll('.tabs__item')
    
//Функция, удаляющая класс .widget_hide
const removeClassHide = () => document.querySelectorAll('.widget_hide').forEach(el => {
    el.classList.remove('widget_hide')
})

//Функция, добовляющая класс widget_hide для элементов, которые необходимо скрыть
const addClassHide = (class1, class2) => document.querySelectorAll(`${class1}, ${class2}`).forEach(el => {
    el.classList.add('widget_hide')
})

//Функция, удаляющая класс .tabs_active 
const removeClassActive = () => document.querySelector('.tabs_active').classList.remove('tabs_active')

//Функция, добовляющая класс .tabs_active на таб по которому кликнули
const addClassActive = (event) => event.target.classList.add('tabs_active')

//Обработчик клика на таб
const tabClickHandler = (event) => {
    
    removeClassActive()
    addClassActive(event)

    //отображение контента соответсвующего кликнутому табу
    switch (event.target.id) {

        case 'tabNow':
            removeClassHide()
            addClassHide('.tab-details', '.tab-forecast')
            break

        case 'tabDetails':
            removeClassHide()
            addClassHide('.tab-now', '.tab-forecast')
            break

        case 'tabForecast':
            removeClassHide()
            addClassHide('.tab-now', '.tab-details')
            break
    }
}

//Вешаем обработчик кликов на табы
tabs.forEach((el) => {
    el.addEventListener('click', tabClickHandler)
})