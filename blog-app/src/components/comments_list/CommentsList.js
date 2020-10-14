import React, { useEffect, useState } from "react";
import "./CommentsList.css"
import axios from 'axios'
function CommentsList() {
  
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const comments = (await axios.get('/comments/all')).data;
      console.log(comments);
      setComments(comments);
    }
    fetchData()
  }, []);

  return comments ? (
    <>
    <div className="list-wrapper">
      <h2>Comments:</h2>
      <ul className="ul">
        {comments.map((comment, index) => 
          <li className="li" key={index}>
            <div><span>"{comment.comment}"</span></div>
            <div><span>{comment.name}</span></div>
          </li>
        )}
      </ul>
    </div>
    </>
  )
  :
  <h2>Loading...</h2>
}

export default CommentsList;