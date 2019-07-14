class PopUp {
    constructor(btnOpen) {
        this.popUpBtn = document.querySelector(btnOpen);
        this.closePopUpBtn = document.querySelector(".close");
        this.popUpmodal = document.querySelector(".popup");
    }

    init() {
        this.popUpBtn.addEventListener('click', this.toggleModal);
        // this.closePopUpBtn.addEventListener('click', this.toggleModal);
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpmodal.classList.toggle('active');
    }

    /*closeModal(event) {
        event.preventDefault();
        this.popUpmodal.classList.toggle('active');
    }*/
}

export default PopUp;
