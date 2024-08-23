const SuccessMessage = props => {
  const {
    textColor,
    success
  } = props;
  return(
    <div className={textColor}>
      {success ?
        <span>Thank you for your message. I will be in touch soon.</span>
        :
        <span>There was a problem sending, please try again later.</span>
      }
    </div>
  )
}

export default SuccessMessage;