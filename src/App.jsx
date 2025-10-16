import React, { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar';

function App() {

  const [progress, setProgress] = useState(0)

  function updateProgress() {
    setProgress(prev => Math.min(100, prev + 10))
  }

  return (
    <>
      <ProgressBar progress={progress} />
      <button onClick={updateProgress}>Increase Progress</button>
    </>
  )
}

export default App
