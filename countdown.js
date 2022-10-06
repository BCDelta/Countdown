const milisecondsPerSecond = 1000;                              //How many miliseconds in second
const secondsPerMinute = 60;                                    //How many seconds per minute
const minutesPerHour = 60;                                      //How many minutes per hour
const hoursPerDay = 24;                                         //How many hours per day 

setInterval(countdown, milisecondsPerSecond);

function countdown() {
    const tripDate = new Date("March 3, 2023 08:15:00");            //Set our trip date

    let currentTime = new Date();                                   //Set current date
    /*
    var seconds = 59 - currentTime.getSeconds();                    //Create second countdown

    var minutes = -(currentTime.getMinutes() - tripDate.getMinutes());
    var hours = 23 - (currentTime.getHours() - tripDate.getHours());
    */
    let timeLeft = tripDate.getTime() - currentTime.getTime();      //Calculate timeleft in miliseconds

    var totalSeconds = timeLeft / milisecondsPerSecond;
    
    var totalMinutes = totalSeconds / secondsPerMinute;
    var totalHours = totalMinutes / minutesPerHour;
    var totalDays = totalHours / hoursPerDay;                       //Converted miliseconds to days left

    var seconds = 59 - Math.abs(currentTime.getSeconds());

    var minutes =  Math.abs(currentTime.getMinutes() - tripDate.getMinutes());
    if(currentTime.getMinutes() > tripDate.getMinutes()) {
        minutes = 59 - (currentTime.getHours() - tripDate.getHours());
    }

    var hours = currentTime.getHours() - tripDate.getHours();
    if(currentTime.getHours() >= tripDate.getHours()) {
        hours = 23 - (currentTime.getHours() - tripDate.getHours());
    }

    var countdownCards = document.getElementsByClassName("time");
    countdownCards[0].querySelector("h2").innerHTML = Math.floor(totalDays);
    countdownCards[1].querySelector("h2").innerHTML = hours;
    countdownCards[2].querySelector("h2").innerHTML = minutes;
    countdownCards[3].querySelector("h2").innerHTML = seconds;

//End countdown when time left (in miliseconds) reaches zero
if(timeLeft == 0) {
    return;
}

    //Display contents
    //document.getElementById("countdown").innerHTML = Math.floor(totalDays) + " " + hours + " " + minutes + " " + seconds;
}
