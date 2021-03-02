const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const accordion = document.querySelectorAll('.acc__accordion');


btnHamburger.addEventListener('click',function(){
    console.log('open hamburger')

    if(header.classList.contains('open')){//close menu
        body.classList.remove('stopscroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{//open menu
        body.classList.add('stopscroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
        

    }
});

var acc = document.getElementsByClassName("acc__accordion");
var i;

for(i=0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        }
        else{
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
