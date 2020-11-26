import React, { useEffect, useState } from "react";
import axios from 'axios'

import "./CommentsList.css"
import Comment from "./Comment"


function CommentsList({ commentsAreUpToDate, setCommentsAreUpToDate }) {
  
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const comments = (await axios.get('/comments/all')).data;
      setComments(comments);
    }
    fetchData()
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const comments = (await axios.get('/comments/all')).data;
      setComments(comments);
    }
    fetchData()
    setCommentsAreUpToDate(true)
  }, [commentsAreUpToDate]);

  return comments ? (
    <>
    <div className="list-wrapper">
      <h2>Comments:</h2>
      <ul className="ul">
        {comments.map((comment, index) =>  
          <Comment key={index} comment={comment}/>
        )}
      </ul>
    </div>
    </>
  )
  :
  <h2>Loading...</h2>
}

export default CommentsList;