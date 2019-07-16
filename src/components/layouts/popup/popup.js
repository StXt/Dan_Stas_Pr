import $ from "jquery";

class PopUp {
    constructor(btnOpen) {
        this.popUpBtn = $(btnOpen).click((e)=> this.toggleModal(e));
    }

    init() {
        /*this.popUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        window.addEventListener('click', (e) => this.closeModal(e));*/
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpmodal.slideToggle(2000);
    }

    /*closeModal(event) {
        event.preventDefault();
        if (event.target === this.popUpmodal) {
            this.popUpmodal.classList.toggle('active');
        }
    }*/
}


export default PopUp;
