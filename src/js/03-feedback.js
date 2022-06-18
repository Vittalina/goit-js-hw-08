import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);

refs.form.addEventListener("input", throttle(event => {
    const valueInput = {
        email: refs.input.value,
        message: refs.textarea.value,
    };
    

    const formDataJSON = JSON.stringify(valueInput);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
}, 500));

populateInput();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
}

function populateInput() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText) {
        refs.input.value = savedText.email || '';
        refs.textarea.value = savedText.message || '';
    }
}
