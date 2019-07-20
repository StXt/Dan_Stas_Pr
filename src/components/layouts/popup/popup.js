class PopUp {
    constructor(signUp, signIn) {
        this.signUp = document.querySelector(signUp);
        this.signIn = document.querySelector(signIn);
        this.closePopUpBtn = document.querySelector(".close__btn");
        this.popUpModal = document.querySelector(".popup");
    }

    init() {
        this.signUp.addEventListener('click', (e) => this.openModal(e));
        this.signIn.addEventListener('click', (e) => this.openModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.closeModal(e));
        this.popUpModal.addEventListener('click', (e) => this.closeModal(e));
    }
    
    openModal(event) {
        event.preventDefault();
        if (this.popUpModal.classList.contains('active')) {
            return;
        } else {
        this.popUpModal.classList.add('active');
        }
    }

    closeModal(event) {
        console.log('hi');
        event.preventDefault();
            if (event.target === this.popUpModal) {
                this.popUpModal.classList.remove('active');
            } else if (event.target === this.closePopUpBtn) {
                this.popUpModal.classList.remove('active');
            }
        
        return;
    }
}

export default PopUp;
