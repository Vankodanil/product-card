// Форма подписки
const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!subscribeForm.checkValidity()) {
    alert("Введите корректный email!");
    return;
  }

  console.log({ email: subscribeForm.email.value });
});

// Модальное окно
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
};

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
}

closeModalBtn.onclick = closeModal;
overlay.onclick = closeModal;

// Регистрация
let user = null;

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!registerForm.checkValidity()) {
    alert("Форма заполнена неверно!");
    return;
  }

  const formData = new FormData(registerForm);

  const password = formData.get("password");
  const password2 = formData.get("password2");

  if (password !== password2) {
    alert("Пароли не совпадают!");
    return;
  }

  user = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    birthDate: formData.get('birthDate'),
    login: formData.get('login'),
    password,
    createOn: new Date(),
  };

  console.log("USER REGISTERED",user);
  closeModal();
});
