window.addEventListener('DOMContentLoaded', function() {
    'use strict';

 //Timer
 
 function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
        return {
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
            'timeRemaining': timeRemaining
        };
    }

    function updateClock() {
        let timer = getTimeRemaining();
    

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        if(timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    }

    updateClock();
     
     
 }

    countTimer('15 december 2020');

});

//menu

const toogleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu); 

    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};

toogleMenu();

//popup

const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');
    const popUpClose = document.querySelector('.popup-close');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    popUpClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
};

togglePopUp();

// Табы

const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++) {
            if(index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('service-header-tab')){
            tab.forEach((item, i) => {
                if(item === target) {
                    toggleTabContent(i);
                    
                }
            });
        }
    });
};

tabs();