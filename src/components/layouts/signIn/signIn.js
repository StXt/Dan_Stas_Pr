import PopUp from "../popup/popup";
import * as firebase from 'firebase/app'
import SignUp from "../signUp/signUp";
import Observer from "./observer";

const observer = new Observer();

observer.subscribe();

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
                this.toggleForm();
            })
            .catch((error)=>{
                const errorCode = error.code,
                      errorMessage = error.message;
                alert(errorMessage);
            });
        this.form.reset();
    }
}

export default SignIn;