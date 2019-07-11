export default function checkFormData() {
    const name = document.querySelector('.sign__container .field__input')[0];
    const email = document.querySelector('.sign__container .field__input')[1];
    const password = document.querySelector('.sign__container .field__input')[2];
    const repeatedPassword = document.querySelector('.sign__container .field__input')[3];


    if (
        password.value === '' ||
        repeatedPassword.value === '' ||
        name.value === '' ||
        email.value === ''
    ) {
        alert('Будь ласка, заповніть необхідні поля.'); 
        password.value = '';
        repeatedPassword.value = '';   
        return;  
    } else if (password.value !== repeatedPassword.value) {
        alert('Паролі не співпадають. Будь ласка, повторіть введення паролю.');
        password.value = '';
        repeatedPassword.value = '';   
        return;        
    }
    
    alert('Ваш профіль збережено. Дякуюємо за реєстрацію.');
    return true;
}