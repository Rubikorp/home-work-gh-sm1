// document.addEventListener('DOMContentLoaded', function() {
//     let countDisplay = document.querySelector('.count-display');
//     let incrementButton = document.querySelector('.increment-button');
//     let decrementButton = document.querySelector('.decrement-button'); 
    
//     function incrementCount() {
//         let currentCount = parseInt(countDisplay.textContent);
//         countDisplay.textContent = currentCount + 1;
//     };
 
//     function decrementCount() {
//         let currentCount = parseInt(countDisplay.textContent);
//         if (currentCount !== 0) {
//             countDisplay.textContent = currentCount - 1;
//         };
//     };

//     incrementButton.addEventListener('click', incrementCount);
//     decrementButton.addEventListener('click', decrementCount);
// });
let minuts = document.querySelector('.minuts');
let seconds = document.querySelector('.seconds');
let startButton = document.querySelector('.start-button');
let removeButton = document.querySelector('.remove-button');



var intervalID


function timerStart() {
    let secondsCount = parseInt(seconds.value);
    let minutsCount = parseInt(minuts.value);
    seconds.disabled = true;
    minuts.disabled = true;

   
    function timer() {
        if (minutsCount > 0 && secondsCount === 0) {
            minuts.value = --minutsCount;
            minutsCount = minuts.value;
            secondsCount += 59;
            seconds.value = secondsCount;
        }
        else if (secondsCount > 0) {
            --secondsCount;
            seconds.value = secondsCount;
            
        }else {
            clearInterval(intervalID);
            intervalID = null;
            minuts.value = '00';
            seconds.value = '00';
            seconds.disabled = false;
            minuts.disabled = false;
            return alert('Таймер завершил работу!');
        }
        
}   
    intervalID = setInterval(timer, 1000);

}   

    function timerReboot() {
        clearInterval(intervalID);
        intervalID = null;
        minuts.value = '00';
        seconds.value = '00';
        seconds.disabled = false;
        minuts.disabled = false;
    }

startButton.addEventListener('click', timerStart)
removeButton.addEventListener('click', timerReboot)

