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