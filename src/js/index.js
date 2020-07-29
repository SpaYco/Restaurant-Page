import "../css/main.scss";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import navbar from './navbar.js';
import Menu from './menu.js';
import render from './menu.js';
import img from "../images/github.png";
import paper from "../images/paper.png";
import bg from "../images/background.jpg";

navbar()
const menu = new Menu
menu.add()
menu.render(0);
window.change = (num) => {
    menu.render(num)
}