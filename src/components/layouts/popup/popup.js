class PopUp {
    constructor() {
        this.closePopUpBtn = document.querySelector(".close__btn");
        this.popUpModal = document.querySelector(".popup");
    }

    init() {
        this.closePopUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        window.addEventListener('click', (e) => this.closeModal(e));
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpModal.classList.toggle('active');
    }

    closeModal(event) {
        event.preventDefault();
        if (event.target === this.popUpModal) {
            this.popUpModal.classList.toggle('active');
        }
    }
}

export default PopUp;
