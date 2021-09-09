export default class Modal {
  constructor(closeBtn, openBtn, containerModal) {
    this.closeBtn = document.querySelector(closeBtn);
    this.openBtn = document.querySelector(openBtn);
    this.containerModal = document.querySelector(containerModal);

    // bindar objeto da classe ao this para callback do eventListener
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // open/close modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // prevent btn default action and add toggle event to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close modal by clicking away
  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.eventToggleModal(event);
    }
  }

  // add modal events
  addModalEvents() {
    this.closeBtn.addEventListener('click', this.eventToggleModal);
    this.openBtn.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.closeBtn && this.openBtn && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
