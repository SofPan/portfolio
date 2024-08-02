import React from "react";

const Form = () => {
  return(
    <>
      <h3>I would love to hear from you!</h3>
      <form>
        <div>
          <label htmlFor="contactName"></label>
          <input type="text" id="contactName" placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="contactEmail"></label>
          <input id="contactEmail" type="email" placeholder="youremail@email.com"/>
          </div>
        <div>
          <label htmlFor="contactMessage">Your Message:</label>
          <textarea id="contactMessage" />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
}

export default Form;