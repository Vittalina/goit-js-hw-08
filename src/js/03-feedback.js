import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);

refs.form.addEventListener("input", throttle(event => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    
    formData[event.target.name] = event.target.value;

    // console.log(formData);
    const formDataJSON = JSON.stringify(formData);
    // console.log(formDataJSON);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
    // console.log(formDataJSON);
}, 500));

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function populateTextarea() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText) {
    const [email, message] = refs.form.elements;
    email.value = savedText.email || '';
        message.value = savedText.message || '';
}
}