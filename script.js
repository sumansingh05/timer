document.addEventListener("DOMContentLoaded",function(){
    const timerElement = document.getElementById("timer");
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
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
    setInterval(updateTimer,1000);
});