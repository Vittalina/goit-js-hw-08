import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const KEY = "feedback-message";

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.input.addEventListener("input", throttle(onEmailInput, 500));
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

populateInputs();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(KEY);
}

function onEmailInput(event) {
    const email = event.target.value;
    console.log(email);
    localStorage.setItem(STORAGE_KEY, email);
}
function onTextareaInput(event) {
    const message = event.target.value;
    console.log(message);
    localStorage.setItem(KEY, message);
}

function populateInputs() {
    const savedMessage = localStorage.getItem(KEY);
    const savedEmail = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        refs.input.value = savedEmail;
        refs.textarea.value = savedMessage;
    }
}