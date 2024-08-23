import React, { useEffect, useRef, useState } from "react";
import { InputLabel, Input, Button, TextareaAutosize } from "@mui/material";
import { styled } from '@mui/system';
import Email from '../../helpers/sendEmail';
import SuccessMessage from "./SuccessMessage";


const StyledInput = styled(Input)({
  minWidth: 275,
  maxWidth: 750,
  width: "100%",
  backgroundColor: "white",
  border: "2px solid transparent",
  borderRadius: "15px",
  padding: "3px 5px",
  boxShadow: "3px 3px black",
  transition: "300ms ease-out",
  "&.Mui-focused": {
    boxShadow: "3px 3px #e365c1"
  }
});

const StyledTextareaAutosize = styled(TextareaAutosize)({
  minWidth: 275,
  maxWidth: 725,
  width: "100%",
  backgroundColor: "white",
  border: "2px solid transparent",
  borderRadius: "15px",
  padding: "15px",
  fontSize: "18px",
  resize: "none",
  boxShadow: "3px 3px black",
  '&:focus-within': {
    outline: '2px solid #e365c1',
    boxShadow: "none"
  }

});

const StyledButton = styled(Button)({
  backgroundColor: "#e365c1",
  color: "#f6e4f6",
  border: "2px solid transparent",
  "&:hover": {
    backgroundColor: "#f6e4f6",
    color: "#e365c1",
    borderColor: "#e365c1"
  }
});

const Form = () => {
  const form = useRef();
  const [emailResponse, setEmailResponse] = useState("SUCCESS");
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (emailResponse === "SUCCESS"){
      setSuccessMessage(<SuccessMessage textColor="color-success" success={true} />)
    }
    if (emailResponse === "FAILED"){
      setSuccessMessage(<SuccessMessage textColor="color-error" success={false} />)
    }
  }, [emailResponse])

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = new Email();
    let response = await email.sendForm(form);
    form.current.reset();
    setEmailResponse(response);
  };


  return(
    <>
      {successMessage}
      <form ref={form} onSubmit={sendEmail} className="form-contact">
        <div className="form-group">
          <InputLabel htmlFor="user_name"></InputLabel>
          <StyledInput name="user_name" type="text" id="user_name" placeholder="Name" disableUnderline={true}/>
        </div>
        <div className="form-group">
          <InputLabel htmlFor="user_email"></InputLabel>
          <StyledInput name="user_email" id="user_email" type="email" placeholder="Email@email.com" disableUnderline={true}/>
          </div>
        <div className="form-group">
          <InputLabel htmlFor="message"></InputLabel>
          <StyledTextareaAutosize 
            minRows={6}
            size="lg"
            variant="plain" 
            id="message"
            name="message"
            placeholder="I look forward to hearing from you!"
          />
        </div>
        <div className="form-group">
          <StyledButton type="submit">Send</StyledButton>
          <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_SITE_KEY}></div>
        </div>
      </form>
    </>
  );
}

export default Form;