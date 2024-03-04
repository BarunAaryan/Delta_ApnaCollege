import { useState } from 'react'
import './App.css'
import Button from "./Button";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
    </>
  )
}

export default App
