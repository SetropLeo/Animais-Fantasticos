export default function initSoftScroll() {
  const linksInternos = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

  function softScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topDistance = section.offsetTop;
    window.scrollTo({
      top: topDistance,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', softScroll);
  });
}
