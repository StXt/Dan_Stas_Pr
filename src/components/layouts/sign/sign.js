import * as firebase from 'firebase/app'

class Sign {
    constructor(signUp, signIn) {
        let togglers = document.querySelectorAll('.toggler__button');
        let togglerArr = Array.prototype.slice.call(togglers);
        
        this.togglerBtns = togglerArr;
        this.signUp = document.querySelector(signUp);
        this.signIn = document.querySelector(signIn);
        this.signUpForm = document.querySelector('.sign-up');
        this.signInForm = document.querySelector('.sign-in');
        this.submit = document.querySelector('.form__submit');

        this.addUser = this.addUser.bind(this);
        this.openForm = this.openForm.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    /* init() {
        this.signUp.addEventListener('click', (e) => this.openForm(e, this.signUpForm, this.signInForm));
        this.signIn.addEventListener('click', (e) => this.openForm(e, this.signInForm,this.signUpForm));
        this.submit.addEventListener('click', (e) => this.addUser(e));      
        this.togglerBtns.forEach(item => {
            item.addEventListener('click', (e) => this.toggleForm(e));
        });
    } */


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

    openForm(form, anotherForm) {
        if(form.classList.contains('active')) {
            return
        } else {
            form.classList.add('active');
            anotherForm.classList.remove('active');
        }
    }
    toggleForm(clicked) {
        if (this.togglerBtns.includes(clicked)) {
            this.signUpForm.classList.toggle('active');
            this.signInForm.classList.toggle('active');
        }
        return
    }
}

export default Sign;