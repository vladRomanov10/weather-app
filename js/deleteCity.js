//Блок в стадии разработки
const deleteCityButton = document.getElementById('deleteCity')

if (IS_DEVELOPMENT_MODE) {

} else {
    deleteCityButton.addEventListener('click', (event) => {
        const elementToRemove = document.querySelector(`option[value=${CURRENT_CITY}]`)
        elementToRemove.remove()
        console.log(elementToRemove)
    })
}
