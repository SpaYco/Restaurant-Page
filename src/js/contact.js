export class Contact {
    add = () => {
      const button = document.createElement('a');
      button.innerHTML = '<i class="large material-icons" onclick="showBtn()">message</i>';
      button.classList.add('btn-floating');
      button.classList.add('btn-large');
      button.classList.add('waves-effect');
      button.classList.add('waves-light');
      button.classList.add('red');
      button.classList.add('contact-btn');
      document.getElementsByTagName('main')[0].appendChild(button);
      const form = document.createElement('div');
      form.classList.add('contact-form');
      form.style.opacity = '0';
      form.style.display = 'none';
      form.innerHTML = `<form class="col s12 ">
      <div class="row">
        <div class="input-field col s12 ">
          <input id="email" type="email" class="validate ">
          <label for="email">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right">we'll be in touch</span>
        </div>
      </div>
      <a class="waves-effect waves-light btn amber">Send <i class="material-icons right">send</i></a>
      <i class="material-icons close-btn" onclick="hideBtn()">close</i>
    </form> `;
      document.getElementsByTagName('main')[0].appendChild(form);
    }

    hide = () => {
      const contact = document.getElementsByClassName('contact-form')[0];
      contact.style.opacity = '0';
      setTimeout(() => { contact.style.display = 'none'; }, 350);
    }

    show = () => {
      const contact = document.getElementsByClassName('contact-form')[0];
      contact.style.display = 'flex';
      setTimeout(() => { contact.style.opacity = '1'; }, 50);
    }
}
export default Contact;