import {toast, ToastContainer} from 'react-toastify'
import Axios from 'axios'
import { useState } from 'react'
import './App.css'
import DisplayCode from './DisplayCode'

function App() {
  const [inputText, setText] = useState('')
  //const [qrCodeUrl, setqrCodeUrl] = useState(null)

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(inputText.trim() === ''){
      toast.error('Enter some text')
      return;
    }
    try{
      const response = await Axios.post('http://localhost:3000/qrcode', {url: inputText})
      setText(null)
      setText(response.data.qr)
    }
    catch(err){
      console.log('Error generating QR Code', err);
      toast.error('Error generating QR Code')
    }
  }
  return (
          <div>
            <h1>QR Code Generator</h1>
            <form onSubmit={handleSubmit}>
              <input type='text' value={inputText} onChange={handleChange} placeholder='Paste link or Image'/>
              <button type='submit'>Generate</button>
            </form>
            <DisplayCode qrCodeURL={inputText}/>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
              closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition: Bounce/>
          </div>
  )
}

export default App
