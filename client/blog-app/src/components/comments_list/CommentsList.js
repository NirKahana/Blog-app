import React, { useEffect } from "react";
import "./CommentsList.css"
import commentsArr from "./commentsArr"
function CommentsList() {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
      <ul>
        {commentsArr.map((comment, index) => 
          <li className="li" key={index}>
            {comment}
          </li>
        )}
      </ul>
    </>
  )
}

export default CommentsList;