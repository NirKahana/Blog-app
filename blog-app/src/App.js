import React, { useEffect, lazy, Suspense } from "react";
// import Form from './components/Form/Form'
import CommentsList from './components/comments_list/CommentsList'
import ErrorBoundary from './components/ErrorBoundry'
const Form = lazy(() => import('./components/Form/Form'));

function App() {
  
  useEffect(() => {
    
  }, []);

  return (
    <>
    <CommentsList />

    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary>
            <Form/>
      </ErrorBoundary>
    </Suspense>
    </>
  )
}

export default App;
