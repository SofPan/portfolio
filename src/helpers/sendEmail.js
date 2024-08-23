import emailjs from '@emailjs/browser';

class Email {
  sendForm(form) {
    return this.#sendEmail(form);
  }
  #sendEmail(form) {
    return emailjs
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
          return "SUCCESS";
        },
        (error) => {
          console.error("Failed...", error);
          return "FAILED";
        },
      );
  }

}

export default Email;