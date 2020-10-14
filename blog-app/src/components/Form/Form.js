import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./Form.css";


function Form() {
  // const path = window.location.pathname;
  const { handleSubmit, register } = useForm();

  // const [inputValue, setInputValue] = useState("");
  // const [textareaValue, setTextareaValue] = useState("");

  
  
  useEffect(() => {
    
  }, []);

    const onSubmit = async (values) => {
        const response = await axios.post('/comments/post', values);
        if (response.status === 200) {
          console.log("request was sent successfully");
        }
  }

  return (
    <>
    <div className="form-wrapper">

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="name_input">
          <p>Name: </p>
          <input placeholder="name" 
                ref={register}
                name="name"
          />
        </div>

        <div className="comment_input">
          <p>Comment: </p>
          <textarea placeholder="write your comment here" 
                    ref={register} 
                    name="comment" 
          />
        </div>

        <button className="submit_button" type="submit">Send Comment</button>

      </form>
    </div>
    </>
  )
}

export default Form;
