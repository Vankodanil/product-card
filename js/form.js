export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }
getValues() {
  const data = new FormData(this.form);
  return Object.fromEntries(data.entries());
  }

isValid() {
  return this.form.checkValidity();
  }

reset() {
  this.form.reset();
  }
}

export const registerForm = new Form("registerForm");

registerForm.form.addEventListener("submit", (e) => {
  e.preventDefault();

if (!registerForm.isValid()) {
  alert("Форма заполнена неверно!");
  return;
}

const values = registerForm.getValues();
console.log("Регистрация",values);
if (values.password !== values.confirmPassword) {
  alert("Пароли не совпадают!");
  return;
}

alert("Успешная регистрация!");
registerForm.reset();
});
