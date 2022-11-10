import Inputmask from "inputmask";

const ELEMENTS_SELECTOR = {
    phone: '[data-mask-phone]',
    email: '[data-mask-email]',
};

export default function () {
    let phones = document.querySelectorAll(ELEMENTS_SELECTOR.phone);
    new Inputmask("+7 (999) 999-99-99").mask(phones);

    let emails = document.querySelectorAll(ELEMENTS_SELECTOR.email);
    new Inputmask("email").mask(emails);
}
inputmask();