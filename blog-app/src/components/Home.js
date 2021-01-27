import React, { lazy, Suspense, useState } from "react";
import CommentsList from './comments/CommentsList'
import ErrorBoundary from './ErrorBoundry'
const Form = lazy(() => import('./Form/Form'));

function Home() {
  const [commentsAreUpToDate, setCommentsAreUpToDate] = useState(true);
  console.log(process.env);
  return (
    <>
    <CommentsList commentsAreUpToDate={commentsAreUpToDate} setCommentsAreUpToDate={setCommentsAreUpToDate}/>
    <Suspense fallback={<h1>Loading...</h1>}>
      <ErrorBoundary>
            <Form setCommentsAreUpToDate={setCommentsAreUpToDate}/>
      </ErrorBoundary>
    </Suspense>
    </>
  )
}

export default Home;