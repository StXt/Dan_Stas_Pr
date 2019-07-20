import $ from "jquery";

import './components/layouts/popup'
import './components/layouts/sign'
import './components/layouts/header'
import './components/layouts/spinner/spinner'
import './components/layouts/section1/section1'
import './components/layouts/section2/section2'
import './components/layouts/section3/section3'
import "./index.pug"
import  "./index.sass"
import "../assets/img"
// import SignUp from "./components/layouts/signUp/signUp";
import PopUp from "./components/layouts/popup/popup"
import Sign from "./components/layouts/sign/sign"
// import SignIn from "./components/layouts/signIn/signIn";
import * as firebase from 'firebase/app'
import 'firebase/auth'

let popUp = new PopUp(".sign-up-modal", ".sign-in-modal");
popUp.init();
let sign = new Sign(".sign-up-modal", ".sign-in-modal");
sign.init();
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
}*/

// let signUp = new SignUp(".sign-up-modal");
// signUp.init();

// let signIn = new SignIn();
// signIn.init();

/*const observer = new Test();

observer.subscribe(data=>{
    console.log('subscribe was fired', data);
});

observer.broadcast({someData:'hello'});*/

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




const logoutBtn = document.querySelector(".logout");
logoutBtn.addEventListener('click', logout);

function logout() {
    firebase.auth().signOut()
        .then(()=>{
            alert("User sign out");
            console.log('User sign out');
        })
        .catch((error)=>{
            console.log(error);
        });
}