//а.ф. для запроса погоды на сервер
const getData = async(url) => {
    const res = await fetch(url)
    const data = await res.json()
    //для удобстава разработки вывожу объект с погодой в консоль
    console.log(data)
    return data
}