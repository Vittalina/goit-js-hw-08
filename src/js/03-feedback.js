import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formData = {
    };

const refs = {
    form: document.querySelector("form"),
    input: document.querySelector("input"),
    textarea: document.querySelector("textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);

refs.form.addEventListener("input", throttle(event => {
    formData[event.target.name] = event.target.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataJSON);
}, 500));

populateInput();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}

function populateInput() {
    const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedText) {
    const [email, message] = refs.form.elements;
        email.value = savedText.email || '';
        message.value = savedText.message || '';
    }
}

