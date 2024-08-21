import React from "react";
import { InputLabel, Input, Button, TextareaAutosize } from "@mui/material";
import { styled } from '@mui/system';

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
  return(
    <>
      <form className="form-contact">
        <div className="form-group">
          <InputLabel htmlFor="contactName"></InputLabel>
          <StyledInput type="text" id="contactName" placeholder="Name" disableUnderline={true}/>
        </div>
        <div className="form-group">
          <InputLabel htmlFor="contactEmail"></InputLabel>
          <StyledInput id="contactEmail" type="email" placeholder="Email@email.com" disableUnderline={true}/>
          </div>
        <div className="form-group">
          <InputLabel htmlFor="contactMessage"></InputLabel>
          <StyledTextareaAutosize 
            minRows={6}
            size="lg"
            variant="plain" 
            id="contactMessage"
            placeholder="I look forward to hearing from you!"
          />
        </div>
        <div className="form-group">
          <StyledButton type="submit">Send</StyledButton>
        </div>
      </form>
    </>
  );
}

export default Form;