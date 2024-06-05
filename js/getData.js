//а.ф. для запроса погоды на сервер
const getData = async(url) => {
    const res = await fetch(url)
    return await res.json()
}