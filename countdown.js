const milisecondsPerSecond = 1000;                              //How many miliseconds in second
const secondsPerMinute = 60;                                    //How many seconds per minute
const minutesPerHour = 60;                                      //How many minutes per hour
const hoursPerDay = 24;                                         //How many hours per day 

setInterval(countdown, milisecondsPerSecond);

function countdown() {
const tripDate = new Date("March 3, 2023 08:15:00");            //Set our trip date

let currentTime = new Date();                                   //Set current date

var seconds = 60 - currentTime.getSeconds();                    //Create second countdown
var minutes = 60 - currentTime.getMinutes();                    //Create minute countdown
var hours = 24 - currentTime.getHours();                        //Create hour countdown

let timeLeft = tripDate.getTime() - currentTime.getTime();      //Calculate timeleft in miliseconds

var totalSeconds = timeLeft / milisecondsPerSecond;
var totalMinutes = totalSeconds / secondsPerMinute;
var totalHours = totalMinutes / minutesPerHour;
var totalDays = totalHours / hoursPerDay;                       //Converted miliseconds to days left

//Display contents
document.getElementById("demo").innerHTML = Math.floor(totalDays) + " " + hours + " " + minutes + " " + seconds;
}
