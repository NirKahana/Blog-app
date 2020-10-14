import React, { useEffect, useRef } from "react";
import axios from 'axios';
import "./Form.css"

function Form() {

  const nameInput = useRef();
  const commentInput = useRef();
  
  useEffect(() => {
    nameInput.current.focus();
    window.scrollTo(0, 0);
    console.log("rendered");
  }, []);

  const onEnterClicked = (e, field) => {
    if (e.keyCode === 13) {
      switch (field) {
        case "name":
          commentInput.current.focus();
          break;
        case "comment":
          e.preventDefault();
          nameInput.current.focus();
          break;
      
        default:
          break;
      }
    }
  }
  const onButtonClicked = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('/comment')
    console.log(data);
  }

  return (
    <>
    <div className="form-wrapper">
      <form>

        <div className="name_input">
          <p>Name: </p>
          <input placeholder="name" ref={nameInput} onKeyDown={(e) => onEnterClicked(e, "name")}/>
        </div>

        <div className="comment_input">
          <p>Comment: </p>
          <textarea placeholder="write your comment here" ref={commentInput} onKeyDown={(e) => onEnterClicked(e, "comment")}/>
        </div>

        <button className="submit_button" onClick={(e)=> onButtonClicked(e)}>Submit</button>

      </form>
    </div>
    </>
  )
}

export default Form;
