export const slogan = () => {
  const main = document.getElementsByTagName('main')[0];
  const input = document.createElement('blockquote');
  input.innerHTML = 'MeRestaurant <br> the way it\'s meant to be served';
  input.classList.add();
  main.appendChild(input);
};
export default slogan;