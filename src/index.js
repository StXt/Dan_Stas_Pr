import $ from "jquery";
import './components/layouts/signUp'
import './components/layouts/signIn/signIn'
import './components/layouts/header'
import './components/layouts/spinner/spinner'
import './components/layouts/section1/section1'
import './components/layouts/section2/section2'
import './components/layouts/section3/section3'
import './components/layouts/slider'
import './components/layouts/slider/slider'
import "./index.pug"
import  "./index.sass"
import "../assets/img"
import SignUp from "./components/layouts/signUp/signUp";
import * as firebase from 'firebase/app'
import 'firebase/auth'

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}








/* function onEntry(entry) {
    entry.forEach((change) => {
        if(change.isIntersecting) {
            change.target.classList.add('visible');
        }
    });
}
let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('section');
for (let elm of elements) {
    observer.observe(elm);
} */

$(function () {

/*let signUp = new SignUp(".sign-up-modal");
signUp.init();*/

var firebaseConfig = {
    apiKey: "AIzaSyD2Z_-c88rQn4FYrnVv7_eR5wOZbhWpuQ8",
    authDomain: "shutepal.firebaseapp.com",
    databaseURL: "https://shutepal.firebaseio.com",
    projectId: "shutepal",
    storageBucket: "",
    messagingSenderId: "209338032365",
    appId: "1:209338032365:web:f62e43ebfceecdac"
};

firebase.initializeApp(firebaseConfig);
(function () {
    firebase.auth().createUserWithEmailAndPassword("dan.network.17@gmail.com", "test123")
        .then(response => {
            console.log('Nice!');
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
})();

});
