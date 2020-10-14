import React, { useEffect } from "react";
import "./CommentsList.css"
import commentsArr from "./commentsArr"
function CommentsList() {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
    <div className="list-wrapper">
      <h2>Comments:</h2>
      <ul className="ul">
        {commentsArr.map((comment, index) => 
          <li className="li" key={index}>
            <div><span>"{comment}"</span></div>
            <div><span>nirko7</span></div>
          </li>
        )}
      </ul>
    </div>
    </>
  )
}

export default CommentsList;