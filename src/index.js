import $ from "jquery";
import './components/layouts/signUp'
import './components/layouts/signIn/signIn'
import './components/layouts/header'
import './components/layouts/spinner/spinner'
import './components/layouts/section1/section1'
import './components/layouts/section2/section2'
import './components/layouts/section3/section3'
import "./index.pug"
import  "./index.sass"
import "../assets/img"
import SignUp from "./components/layouts/signUp/signUp";
import SignIn from "./components/layouts/signIn/signIn";
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

let signUp = new SignUp(".sign-up-modal");
signUp.init();

let signIn = new SignIn();
signIn.init();

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


firebase.auth().onAuthStateChanged(user=>{
    if (user) {
        console.log(user.email);
    }
    const img = document.createElement("img");
    img.src = "./assets/img/user/user-default.jpg";
    img.className = "user__avatar";

    var src = document.querySelector(".user");
    src.appendChild(img);
    /*const img = document.querySelector('user__avatar');
    img.src = "./assets/img/user/user-default.jpg";*/
});