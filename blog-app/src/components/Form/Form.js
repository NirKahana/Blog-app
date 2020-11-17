import React, { useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./Form.css";


function Form() {

  const { handleSubmit, register, reset } = useForm();
  const nameRef = useRef();
  const commentRef = useRef();
 

  useEffect(() => {
    nameRef.current.focus()
    window.scrollTo(0,0);
  }, []);

  const onSubmit = async (values) => {
      const response = await axios.post('/comments/post', values);
      if (response.status === 200) {
        console.log("request was sent successfully");
      }
      reset();
  }
  const onEnterClicked = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      commentRef.current.focus();
    }
  }

  return (
    <>
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className="name_input">
          <p>Name: </p>
          <input placeholder="name" 
                ref={(e) => {
                  register(e)
                  nameRef.current = e
                }}
                name="name"
                onKeyDown={(e) => {onEnterClicked(e)}}
          />
        </div>

        <div className="comment_input">
          <p>Comment: </p>
          <textarea placeholder="write your comment here"
                    ref={(e) => {
                      register(e)
                      commentRef.current = e;
                    }}
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
