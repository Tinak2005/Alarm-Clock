let timetoring = document.querySelector("#ringtime")
let currenttime = document.querySelector(".time")
let hours = document.querySelector("#hours")
let minutess = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let ampm = document.querySelector("#timestr")
let alarmring = document.querySelector("#ringtime")
let alarmsound = document.querySelector("#ringsound")
let image = document.querySelector("#clock")

setInterval(() => {
    let time = new Date()
    let nowtime = time.toLocaleTimeString()
    currenttime.innerHTML = nowtime;
}, 1000);

const setalarm = () => {
    if (hours.value == "" && minutes.value == "" && seconds.value == "") {
        alarmring.innerHTML = `${"Set the time"}`
    }
    else {
        alarmring.innerHTML = `${hours.value}:${minutes.value}:${seconds.value} ${ampm.value}`
    }
}

let checkinterval = setInterval(() => {
    let time = new Date()
    let clocktime = time.toLocaleTimeString()
    let systemtimearr = clocktime.split(":")
    let systemhours = systemtimearr[0]
    let systemminutes = systemtimearr[1]
    let systemseconds = systemtimearr[2]

    let alarmtime = alarmring.innerHTML
    let timearr = alarmtime.split(":")
    let ringhours = timearr[0]
    let ringminutes = timearr[1]
    let ringseconds = timearr[2]

    if (systemhours == ringhours && systemminutes == ringminutes && systemseconds == ringseconds) {
        alarmsound.play()
        image.src = "image_processing20191122-17971-kxby63.gif"

        alarmsound.loop = "true"
        // clearInterval(checkinterval)
    }
}, 1000);
