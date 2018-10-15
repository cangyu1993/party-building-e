export default {

    getData(unix) {
        let data = new Date(unix)

        let addZero = (x) => {

            return x >= 10 ? x : '0' + x
        }


        let year = data.getFullYear()
        let month = addZero(data.getMonth())
        let day = addZero(data.getDate())
        let hour = addZero(data.getHours())
        let mins = addZero(data.getMinutes())
        let seconds = addZero(data.getSeconds())

        let timeStr = `${year}-${month}-${day} ${hour}-${mins}-${seconds}`

        return timeStr
    }
}