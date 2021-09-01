export default function initscrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const halfWindow = window.innerHeight * 0.6;

  function scrollAnimation() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - halfWindow) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
  }
}
