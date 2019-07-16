import $ from "jquery";
import './components/layouts/signUp'
import './components/layouts/signIn/signIn'
import './components/layouts/header'
import './components/layouts/spinner/spinner'
import './components/layouts/section1/section1'
import './components/layouts/section2/section2'
import "./index.pug"
import  "./index.sass"
import "../assets/img"
import SignUp from "./components/layouts/signUp/signUp";
import * as firebase from 'firebase/app'
import 'firebase/auth'


function onEntry(entry) {
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
}

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
