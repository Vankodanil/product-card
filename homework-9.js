import { Form } from "./js/form.js";
import { Modal } from "./js/modal.js";

const modalRegister = new Modal("modal", "overlay");

document.getElementById("openModalBtn").addEventListener("click", () => {
  modalRegister.open();
});

const subscribeForm = document.getElementById("subscribeForm");
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!subscribeForm.checkValidity()) {
    alert("Введите корректный email!");
    return;
  }
  console.log({ email: subscribeForm.email.value });
});

let user = null;

const registerForm = new Form("registerForm");

registerForm.form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!registerForm.isValid()) {
    alert("Форма заполнена неверно!");
    return;
  }

  const values = registerForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert("Пароли не совпадают!");
    return;
  }

const { confirmPassword, ...userData } = registerForm.getValues();

user = {
  ...userData,
  createOn: new Date()
};

  console.log("USER REGISTERED", user);

  modalRegister.close();
  registerForm.reset();

  alert("Успешная регистрация!");
});