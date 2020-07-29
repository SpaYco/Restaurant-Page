export const navbar = () => {
  const content = document.getElementById('content');
  const navbar = document.createElement('nav');
  navbar.classList.add('amber');
  document.body.insertBefore(navbar, content);
  const nav = document.getElementsByTagName('nav')[0];
  nav.innerHTML = `<nav class="nav-extended">
    <div>
      <a href="#" class="brand-logo center">MeRestaurant</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="https://github.com/Spayco/Restaurant-Page" target="_blank"><i class="left"><img src="./src/images/github.png" alt="github"></i>GitHub</a></li>
      </ul>
    </div>
  </nav>`;
};

export default navbar;