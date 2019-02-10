// console.log(new Date())

function clock() {
    const fullDate = new Date()
    // console.log(fullDate.getHours())
    let hour = fullDate.getHours()
    let min = fullDate.getMinutes()
    let secs = fullDate.getSeconds()

    if (hour < 10) {
        hour = "0" + hour
    }

    if (min < 10) {
        min = "0" + min
    }

    if (secs < 10) {
        secs = "0" + secs
    }

    document.getElementById('hour').innerHTML = hour
    document.getElementById('minute').innerHTML = ":" + min
    document.getElementById('second').innerHTML = ":" + secs
}

setInterval(clock, 100)
