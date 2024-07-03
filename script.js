const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

document.addEventListener("DOMContentLoaded",function(){
    const timerElement = document.getElementById("timer");
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let intervalId = null;

    function pad(number){
        return (number < 10) ? '0' + number : number;
    }
    function updateTimer(){
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes === 60){
                minutes = 0;
                hours++;
            }
        }
        timerElement.textContent = pad(hours) + ':' + pad(minutes) + ':' +  pad(seconds);
    }
    start.addEventListener("click",()=>{
        if(intervalId === null){
            intervalId = setInterval(updateTimer,1000);
        }
    });

    stop.addEventListener("click",()=>{
        if(intervalId !== null){
            clearInterval(intervalId);
            intervalId = null;
        }
    });

    reset.addEventListener("click",()=>{
        if(intervalId !== null){
            clearInterval(intervalId);
            intervalId = null;
        }
        seconds = 0;
        minutes = 0;
        hours = 0;
        timerElement.textContent = "00:00:00";
    });

});