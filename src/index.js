import './components/layouts/popup'
import './components/layouts/popup/popup'
import './components/layouts/header'
import './components/layouts/spinner/spinner'
import './components/layouts/section1/section1'
import "./index.pug"
import  "./index.sass"
import "../assets/img"
import PopUp from "./components/layouts/popup/popup";

let popUp = new PopUp(".sign-up-modal");
popUp.init();

/*const popUp = document.querySelector('.sign-up-modal');
popUp.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault();
    const signBlock = document.querySelector('.sign');
    const wrapperBlock = document.querySelector('.wrapper');
    signBlock.classList.toggle('active');
}*/

/*window.addEventListener('click', closeModal);

function closeModal(event) {
    const signBlock = document.querySelector('.sign');
    console.log(event.target);
    if (event.target === signBlock) {
        signBlock.classList.add('hover');
    }
}*/

/*
const signUpBtn = document.querySelector('.sign-up .toggler__button'),
      signInBtn = document.querySelector('.sign-in .toggler__button');
signUpBtn.addEventListener('click', toggleForm);
signInBtn.addEventListener('click', toggleForm);

function toggleForm(event) {
    event.preventDefault();
    const signUp = document.querySelector('.sign-up'),
          signIn = document.querySelector('.sign-in');
    signUp.classList.toggle('active');
    signIn.classList.toggle('active');
}*/
