import SoftScroll from './modules/soft-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initOperation from './modules/operations.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import initscrollAnimation from './modules/scroll-animation.js';

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

initDropdownMenu();
initMenuMobile();
initOperation();
initscrollAnimation();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
