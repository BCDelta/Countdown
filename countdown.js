const milisecondsPerSecond = 1000;                              //How many miliseconds in second
const secondsPerMinute = 60;                                    //How many seconds per minute
const minutesPerHour = 60;                                      //How many minutes per hour
const hoursPerDay = 24;                                         //How many hours per day 

setInterval(countdown, milisecondsPerSecond);

var seconds, minutes, hours;

function countdown() {
    const tripDate = new Date("March 3, 2023 08:15:00");            //Set our trip date

    let currentTime = new Date();                                   //Set current date

    let timeLeft = tripDate.getTime() - currentTime.getTime();      //Calculate timeleft in miliseconds

    var totalSeconds = timeLeft / milisecondsPerSecond;
    
    var totalMinutes = totalSeconds / secondsPerMinute;
    var totalHours = totalMinutes / minutesPerHour;
    var totalDays = (totalHours / hoursPerDay);                       //Converted miliseconds to days left

    if(timeLeft > 0) {
        seconds = 60 - (currentTime.getSeconds() - tripDate.getSeconds()) - 1;

        if(currentTime.getMinutes() > tripDate.getMinutes()) {
            minutes = 60 - (currentTime.getMinutes() - tripDate.getMinutes());
        }
        else {
            minutes = Math.abs(currentTime.getMinutes() - tripDate.getMinutes()) - 1;
        }

        if(currentTime.getHours() > tripDate.getHours()) {
            hours = 24 - Math.abs(currentTime.getHours() - tripDate.getHours());
        }
        else {
            hours = Math.abs(currentTime.getHours() - tripDate.getHours()) - 1;
        }

        if(seconds < 1) {
            minutes--;
        }
        if(minutes < 1) {
            hours--;
            minutes = 59;
        }
        if(hours < 1) {
            totalDays--;
            hours = 23;
        }
        var countdownCards = document.getElementsByClassName("time");
        countdownCards[0].querySelector("h2").innerHTML = Math.floor(totalDays);
        countdownCards[1].querySelector("h2").innerHTML = hours;
        countdownCards[2].querySelector("h2").innerHTML = minutes;
        countdownCards[3].querySelector("h2").innerHTML = seconds;
    }

    //Display contents
    //document.getElementById("countdown").innerHTML = Math.floor(totalDays) + " " + hours + " " + minutes + " " + seconds;
}
