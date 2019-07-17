import PopUp from "../popup/popup";
import * as firebase from 'firebase/app'

class SignUp extends PopUp {
    constructor(btnOpen) {
        super();
        this.popUpBtn = document.querySelector(btnOpen);
        this.signUpBtn = document.querySelector(".form__button");
        this.switchSignUpBtn = document.querySelector('.toggler__button-sign-up');
        this.switchSignInBtn = document.querySelector('.toggler__button-sign-in');
    }

    init() {
        super.init();
        this.popUpBtn.addEventListener('click', (e) => this.openModal(e));
        this.signUpBtn.addEventListener('click', (e) => this.addUser(e));
        this.switchSignUpBtn.addEventListener('click', (e) => this.toggleForm(e));
        this.switchSignInBtn.addEventListener('click', (e) => this.toggleForm(e));
    }

    addUser() {
        this.form = document.querySelector(".sign__form");
        this.name = document.querySelector('.field__input-name').value;
        this.email = document.querySelector('.field__input-email').value;
        this.password = document.querySelector('.field__input-pswd').value;
        this.repeatedPassword = document.querySelector('.field__input-repeated-pswd').value;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(response => {
                console.log(response);
                alert("You are successfully complete registration!");
            })
            .then(()=> {
                this.toggleForm();
            })
            .catch((error)=>{
                const errorCode = error.code,
                      errorMessage = error.message;
                alert(errorMessage);
            });
        this.form.reset();
    }

    toggleForm() {
        this.signList = document.querySelectorAll('.popup');
        this.sign = Array.prototype.slice.call(this.signList);
        this.sign.forEach((element)=>{
            element.classList.toggle('active')
        })
    }

    openModal(event) {
        event.preventDefault();
        this.popUpmodal.classList.toggle('active');
    }

}

export default SignUp;