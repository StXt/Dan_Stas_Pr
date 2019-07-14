import PopUp from "../popup/popup";

class SignUp extends PopUp {
    constructor(btn) {
        super(btn);
        this.user = [];
        this.signUpBtn = document.querySelector(".form__button");
    }

    init() {
        const self = this;
        super.init();
        this.signUpBtn.addEventListener('click', function () {
            self.addUser();
        });
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


}

export default SignUp;