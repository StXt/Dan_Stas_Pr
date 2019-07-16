import "./popup.sass"
import $ from "jquery";
import PopUp from "./popup";

const popupCollection = $(".popup");

popupCollection.each((i, el) => {
    const popup = new PopUp(el);
    popup.init();
});
