const favouriteCityButton = document.getElementById('like-button')
const favouriteCityIcon = document.getElementById('like-pic')
const favouriteCityTransparentIcon = 'assets/images/like.png'
const favouriteCityColorIcon = 'assets/images/likeColor.png'

//Проверка на то, есть ли запрашиваемый город в списке сохраненных городов
let isCityInList = () => addedLocations.includes(CURRENT_CITY)