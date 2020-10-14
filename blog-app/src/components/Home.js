import React, { useEffect, lazy, Suspense } from "react";
import CommentsList from './comments_list/CommentsList'
import ErrorBoundary from './ErrorBoundry'
const Form = lazy(() => import('./Form/Form'));

function Home() {
  
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

export default Home;