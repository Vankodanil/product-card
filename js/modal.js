export class Modal {
  constructor(id, overlayId) {
    this.modal = document.getElementById(id);
    this.overlay = document.getElementById(overlayId);
    this.closeBtn = document.getElementById("closeModalBtn");
    this.initListener();
  }

  open() { 
  this.modal.classList.add("modal-showed");
  this.overlay.classList.add("overlay-showed");
  }

  close() {
this.modal.classList.remove("modal-showed");
this.overlay.classList.remove("overlay-showed");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  initListener() {
    this.closeBtn.addEventListener("click", () => this.close());
    this.overlay.addEventListener("click", () => this.close());
  }
}
export const modalRegister = new Modal("modal", "overlay");
document.getElementById("openModalBtn").addEventListener("click", () => { modalRegister.open();
})

