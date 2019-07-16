import $ from "jquery";

class PopUp {
    constructor(btnOpen) {
        // console.log($(".popup")[0]);
        this.popUpBtn = $(btnOpen).click((e)=> this.toggleModal(e));
        // this.closePopUpBtn = $(".close__btn");
        this.popUpmodal = $(".popup")[0];
        console.log(this.popUpmodal);
    }

    init() {
        /*this.popUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        this.closePopUpBtn.addEventListener('click', (e) => this.toggleModal(e));
        window.addEventListener('click', (e) => this.closeModal(e));*/
    }

    toggleModal(event) {
        event.preventDefault();
        this.popUpmodal.slideToggle(2000);
        this.popUpmodal.animate({left: '200'}, "slow");
        this.popUpmodal.animate({fontSize: '3rem'}, "slow");
    }

    /*closeModal(event) {
        event.preventDefault();
        if (event.target === this.popUpmodal) {
            this.popUpmodal.classList.toggle('active');
        }
    }*/
}


export default PopUp;
