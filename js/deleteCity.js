const deleteCityButton = document.getElementById('deleteCity')

const deleteClickHandler = () => {

    //Находим выбранный пользователем город из списка добавленных городов
    const remoteElement = document.querySelector(`option[value=${CURRENT_CITY}]`)
    
    remoteElement.remove()
    
    //Обновляем список сохраненных городов и пушим его в localStorage
    addedLocations = addedLocations.filter(el => el !== `${remoteElement.value}`)
    
    localStorage.setItem('addedLocations', JSON.stringify(addedLocations))
}

deleteCityButton.addEventListener('click', deleteClickHandler)


