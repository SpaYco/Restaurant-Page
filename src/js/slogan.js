export const slogan = () => {
  const content = document.getElementById('content');
  const mainEl = document.createElement('main');
  document.body.insertBefore(mainEl, content);
  mainEl.appendChild(content);
  const main = document.getElementsByTagName('main')[0];
  const input = document.createElement('blockquote');
  input.innerHTML = 'MeRestaurant <br> the way it\'s meant to be served';
  input.classList.add();
  main.appendChild(input);
};
export default slogan;