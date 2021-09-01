export default function initTabNavigation() {
  const tabNavigation = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });

    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabNavigation.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabNavigation.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
