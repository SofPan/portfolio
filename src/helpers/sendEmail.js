import emailjs from '@emailjs/browser';

class Email {

  sendForm(form) {
    this.#sendEmail(form);
  }
  #sendEmail(form) {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  }

}

export default Email;