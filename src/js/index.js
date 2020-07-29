import '../css/main.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import navbarFunction from './navbar';
/* eslint-disable */
import MenuClass from './menu'; 
import img from '../images/github.png';
import paper from '../images/paper.png';
import bg from '../images/background.jpg';
import slogan from './slogan';
/* eslint-enable */

navbarFunction();
const menu = new MenuClass();
menu.add();
menu.render(0);
slogan();
window.change = (num) => {
  menu.render(num);
};