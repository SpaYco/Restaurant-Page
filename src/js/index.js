import '../css/main.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import navbarFunction from './navbar';
import MenuClass from './menu';
/* eslint-disable */
import img from '../images/github.png';
import paper from '../images/paper.png';
import bg from '../images/background.jpg';
/* eslint-enable */
import sloganText from './slogan';
import ContactBtn from './contact';

navbarFunction();
const menu = new MenuClass();
const contact = new ContactBtn();
menu.add();
menu.render(0);
sloganText();
contact.add();
window.change = (num) => {
  menu.render(num);
};
window.showBtn = () => {
  contact.show();
};
window.hideBtn = () => {
  contact.hide();
};