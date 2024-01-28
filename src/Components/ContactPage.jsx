import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Ur = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if all fields are filled out
    const form = formRef.current;
    const isValid = form.elements['user_name'].value.trim() !== '' &&
                    form.elements['user_email'].value.trim() !== '' &&
                    form.elements['user_subject'].value.trim() !== '' &&
                    form.elements['message'].value.trim() !== '';
  
    if (isValid) {
      emailjs.sendForm(
        "service_owzkxuo",
        "template_mpyp805",
        formRef.current,
        "F9zbpAUuq5b-U3o_Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      alert("Please Enter full details.");
    }
  };
  

  return (
    <div className="c">
      <p className="desc">
        <h1>Tell Me About your Experience or any Opportunity I can work upon.</h1>
      </p>
      <div className="cform">
        <form ref={formRef} onSubmit={handleSubmit}>
        <h2 className="commm">Let me know You were here:</h2>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Your Mail-Id" name="user_email" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <textarea name="message" id="" cols="30" rows="5" placeholder="Message "></textarea>
          <button type="submit" className="bn5">Submit</button>
          {done && formRef.current && "Message successfully Sent! Thank you for your message"}
        </form>
        <h2 className="commm">Your Comments Matters!</h2>
      </div>
    </div>
  );
};

export default Ur;
