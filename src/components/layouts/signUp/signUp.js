import PopUp from "../popup/popup";

class SignUp extends PopUp {
    constructor(btn) {
        super(btn);
        this.user = [];
        this.signUpBtn = document.querySelector(".form__button");
        this.switchSignUpBtn = document.querySelector('.toggler__button-sign-up');
        this.switchSignInBtn = document.querySelector('.toggler__button-sign-in');
    }

    init() {
        super.init();
        this.signUpBtn.addEventListener('click', (e) => this.addUser(e));
        this.switchSignUpBtn.addEventListener('click', (e) => this.toggleForm(e));
        this.switchSignInBtn.addEventListener('click', (e) => this.toggleForm(e));
    }

    addUser() {
        this.name = document.querySelector('.field__input-name');
        this.email = document.querySelector('.field__input-email');
        this.password = document.querySelector('.field__input-pswd');
        this.repeatedPassword = document.querySelector('.field__input-repeated-pswd');
        this.person = {
            name: this.name.value,
            email: this.email.value,
            password: this.password.value,
            repeatedPassword: this.repeatedPassword.value,
        };
        this.user.push(this.person);
        this.name.value = '';
        this.email.value = '';
        this.password.value = '';
        this.repeatedPassword.value = '';
        console.log(this.user);
    }

    toggleForm(event) {
        event.preventDefault();
        this.signList = document.querySelectorAll('.popup');
        this.sign = Array.prototype.slice.call(this.signList);
        this.sign.forEach((element)=>{
            element.classList.toggle('active')
        })
    }

}

export default SignUp;