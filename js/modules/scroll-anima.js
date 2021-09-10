export default class ScrollAnima{
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfWindow) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init () {
    window.addEventListener('scroll', this.scrollAnimation);
  }
  if (this.sections.length) {
    scrollAnimation();
  }
}
