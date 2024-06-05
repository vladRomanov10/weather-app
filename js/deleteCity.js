const deleteCityButton = document.getElementById('deleteCity')

const deleteCityFromList = () => {
    
    //Делаем кнопку лайка прозрачной
    favouriteCityIcon.src = favouriteCityTransparentIcon
    
    //Находим выбранный пользователем город из списка добавленных городов
    const remoteElement = document.querySelector(`option[value=${CURRENT_CITY_VALUE}]`)
    
    if (!remoteElement) {
        alert('There is no city list entry.')
        return
    }
    remoteElement.remove()

    //Обновляем список сохраненных городов и пушим его в localStorage
    addedLocations = addedLocations.filter(el => el !== `${remoteElement.textContent}`)

    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

deleteCityButton.addEventListener('click', deleteCityFromList)


