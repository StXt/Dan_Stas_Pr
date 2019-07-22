class PopUp {
    constructor(signUp, signIn) {
        this.signUp = document.querySelector(signUp);
        this.signIn = document.querySelector(signIn);
        this.closePopUpBtn = document.querySelector(".close__btn");
        this.popUpModal = document.querySelector(".popup");
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    /* init() {
        this.signUp.addEventListener('click', (e) => this.openModal(e));
        this.signIn.addEventListener('click', (e) => this.openModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.closeModal(e));
        this.popUpModal.addEventListener('click', (e) => this.closeModal(e));
    } */
    
    openModal(clicked) {
        console.log('hi');
        if (clicked === this.signUp || clicked === this.signIn) {
            if (this.popUpModal.classList.contains('active')) {
                return;
            } else {
            this.popUpModal.classList.add('active');
            }
        }
        return
    }

    closeModal(clicked) {
        if (clicked === this.closePopUpBtn || clicked === this.popUpModal) {
            if (this.popUpModal.classList.contains('active')) {
                this.popUpModal.classList.remove('active');
            }
            return 
        }
        return
    }
}

export default PopUp;
