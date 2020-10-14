import React, { lazy, Suspense, useEffect, useRef } from "react";
import Form from './components/Form'
import CommentsList from './components/comments_list/CommentsList'
import './App.css';
// const Form = lazy(() => import('./components/Form'));

function App() {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
    <CommentsList />
    <Form />
    </>
  )
}

export default App;
