class PopUp {
    constructor(btnOpen) {
        this.popUpBtn = document.querySelector(btnOpen);
        this.closePopUpBtn = document.querySelector(".btn-close");
    }

    init() {
        this.popUpBtn.addEventListener('click', this.toggleModal);
        this.closePopUpBtn.addEventListener('click', this.toggleModal);
        window.addEventListener('click', this.closeModal);
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpmodal = document.querySelector(".popup");
        this.popUpmodal.classList.toggle('active');
    }

    closeModal(event) {
        event.preventDefault();
        this.popUpmodal = document.querySelector(".popup");
        if (event.target === this.popUpmodal) {
            this.popUpmodal.classList.toggle('active');
        }
    }
}

export default PopUp;
