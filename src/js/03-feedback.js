import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const KEY = "feedback-message"

const formData = {};

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.input.addEventListener("input", throttle(onEmailInput, 500));
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

refs.form.addEventListener("input", event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    
    formData[event.target.name] = event.target.value;
    
    console.log(formData);
    const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);
})

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
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

function populateTextarea() {
    const savedMessage = localStorage.getItem(KEY);
    const savedEmail = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        refs.input.value = savedEmail;
        refs.textarea.value = savedMessage;
    }
}