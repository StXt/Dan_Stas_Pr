import PopUp from "../popup/popup";
import * as firebase from 'firebase/app'
import {Observable, Observer} from "./observer";

const observable = new Observable();
const toogleFormObserver = new Observer(f1);

observable.subscribe(toogleFormObserver);

observable.subscribe();

class SignIn extends PopUp {
    constructor() {
        super();
        this.signInBtn = document.querySelector(".form__button-sign-in");
    }

    init() {
        super.init();
        this.signInBtn.addEventListener('click', (e) => this.loginUser(e));
    }

    loginUser() {
        this.email = document.querySelector('.field__input--email').value;
        this.password = document.querySelector('.field__input--pswd').value;
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(response => {
                // console.log(response);
                alert("Welcome!");
                // this.toggleForm();
                observable.notify();

            })
            .catch((error)=>{
                const errorCode = error.code,
                      errorMessage = error.message;
                alert(errorMessage);
            });
        this.form.reset();
    }
}

function f() {
    firebase.auth().onAuthStateChanged(user=>{
        if (user) {
            console.log(user.email);
            const img = document.createElement("img");
            img.src = "./assets/img/user/user-default.jpg";
            img.className = "user__avatar";
            const src = document.querySelector(".user");
            src.appendChild(img);
        }

        /*const img = document.querySelector('user__avatar');
        img.src = "./assets/img/user/user-default.jpg";*/
    });
}

function f1() {
    const signList = document.querySelectorAll('.popup'),
    sign = Array.prototype.slice.call(signList);
    sign.forEach((element)=>{
        element.classList.toggle('active')
    })
}

export default SignIn;