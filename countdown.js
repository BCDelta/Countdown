const milisecondsPerSecond = 1000;                              //How many miliseconds in second
const secondsPerMinute = 60;                                    //How many seconds per minute
const minutesPerHour = 60;                                      //How many minutes per hour
const hoursPerDay = 24;                                         //How many hours per day 

//setInterval(countdown, milisecondsPerSecond);

var seconds, minutes, hours;

function countdown() {
    const tripDate = new Date("March 3, 2023 07:25:00");            //Set our trip date

    let currentTime = new Date();                                   //Set current date

    let timeLeft = tripDate.getTime() - currentTime.getTime();      //Calculate timeleft in miliseconds

    var totalSeconds = timeLeft / milisecondsPerSecond;             //Calculated total seconds
    var totalMinutes = totalSeconds / secondsPerMinute;
    var totalHours = totalMinutes / minutesPerHour;

    var totalDays = Math.floor(totalHours / hoursPerDay);

    //If there is still time remaining
    if(timeLeft > 0) {
        //Seconds countdown... 
        seconds = 59 - currentTime.getSeconds() - tripDate.getSeconds();

        //Make minute countdown advance by 60 minutes when the current minute passes event minute
        if(currentTime.getMinutes() > tripDate.getMinutes()) {
            minutes = 59 - (currentTime.getMinutes() - tripDate.getMinutes());
        }
        //Find difference in current minutes to event minutes, -1 used in consideration to second countdown
        else {
            minutes = Math.abs(currentTime.getMinutes() - tripDate.getMinutes()) - 1;
        }

        //Make hour countdown advance by 24 hours when the current hour passes the even hour
        if(currentTime.getHours() > tripDate.getHours()) {
            hours = 24 - Math.abs(currentTime.getHours() - tripDate.getHours());
        }
        //If the difference in current hours to even hours, -1 used in consideration to hour countdown
        else {
            hours = Math.abs(currentTime.getHours() - tripDate.getHours());
        }

        if(hours < 1 && totalDays > 0) {
            totalDays--;
            hours = 24;
        }

        if(minutes < 1 && hours > 0) {
            hours--;
            minutes = 59;
        }
        if(seconds < 1 && minutes > 0) {
            minutes--;
        }

        //Display values in the timecards
        var countdownCards = document.getElementsByClassName("time");
        countdownCards[0].querySelector("h2").innerHTML = totalDays;
        countdownCards[1].querySelector("h2").innerHTML = hours;
        countdownCards[2].querySelector("h2").innerHTML = minutes;
        countdownCards[3].querySelector("h2").innerHTML = seconds;

        var displayDate = document.getElementsByClassName("displayDate");
        displayDate[0].innerHTML = tripDate.toLocaleDateString() + " " + tripDate.toLocaleTimeString();
        
        setInterval(countdown, 1000);
    }
}
