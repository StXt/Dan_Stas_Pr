class PopUp {
    constructor(btnOpen) {
        this.popUpBtn = document.querySelector(btnOpen);
        this.closePopUpBtn = document.querySelector(".close__btn");
        this.popUpmodal = document.querySelector(".popup");
    }

    init() {
        this.popUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        window.addEventListener('click', (e) => this.closeModal(e));
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpmodal.classList.toggle('active');
    }

    closeModal(event) {
        event.preventDefault();
        if (event.target === this.popUpmodal) {
            this.popUpmodal.classList.toggle('active');
        }
    }
}

export default PopUp;
