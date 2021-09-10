import SoftScroll from './modules/soft-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operations.js';
import fetchBtc from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// const ScrollAnima = new AnimaScroll('[data-anime="scroll"]');
// ScrollAnima.init();

initDropdownMenu();
initMenuMobile();
initOperation();
ScrollAnima();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBtc('https://blockchain.info/ticker', '.btc-preco');
