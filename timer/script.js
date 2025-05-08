const timer = document.querySelector('.timer'); 
const upKey = document.querySelector('.up'); 
const downKey = document.querySelector('.down'); 


let timerDefaultValue = 0;

timer.textContent = timerDefaultValue

upKey.addEventListener('click', function(){
    timerDefaultValue += 1;
    timer.textContent = timerDefaultValue
});

downKey.addEventListener('click', function(){

    if(timerDefaultValue > 0 ){
        timerDefaultValue -= 1;
        timer.textContent = timerDefaultValue
    }
});