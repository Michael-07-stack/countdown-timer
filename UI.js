
function countdownTimer(totalSeconds){

    // Update the countdown every second.
    const countdownInterval = setInterval(function(){
            var days = document.getElementById('days');
        const add = Math.floor(totalSeconds / ( 24 * 60 * 60));
            var hours = document.getElementById('hours');
        const sub = Math.floor((totalSeconds % ( 24* 60 * 60)) / (60 * 60));
            var minutes = document.getElementById('minutes');
        const div = Math.floor((totalSeconds % (60 * 60)) / (60));
            var seconds = document.getElementById('seconds');
        const mul = totalSeconds % 60;
       
        // Display the countdown.
        days.innerHTML = add;
        hours.innerHTML = sub;
        minutes.innerHTML = div;
        seconds.innerHTML = mul;

        // decrease the totalSeconds.
        totalSeconds--;

        // restart the contdown when seconds reach zero.
        if(totalSeconds < 0){
            clearInterval(countdownInterval);
            totalSeconds = initialTotalSeconds;

            // restart the countdown
            setTimeout(countdownTimer(totalSeconds), 1000);
        }
    },1000)
}

// Set the initial total seconds for the countdown.
const initialTotalSeconds = 864000;

// start the countdown timer
countdownTimer(initialTotalSeconds);




let ham = document.querySelector('#ham');
let nav = document.querySelector('nav');

ham.addEventListener('click', (e) => {
       e.preventDefault();
       nav.classList.toggle('show');
});







