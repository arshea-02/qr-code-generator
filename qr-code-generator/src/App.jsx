import { Link } from 'react-router-dom'
import DisplayCode from './DisplayCode'
import { useState } from 'react'
import './App.css'

function App() {
  const {inputText, setText} = useState('')

  const handleChange = (e)=>{
    setText(e.target.name= e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setText(inputText)
    if(inputText !== 0){
      <Link to='/DisplayCode'>
        <DisplayCode url={inputText}/>
      </Link>
    }
  }
  return (
          <div>
            <form onSubmit={handleSubmit}></form>
            <input type='text' name='input' value='input' onChange={handleChange} placeholder='Paste link or Image'/>
            <button type='submit'>Generate</button>
          </div>
  )
}

export default App
