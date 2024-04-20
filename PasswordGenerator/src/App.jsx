import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook to use copy button
  const passwoedref = useRef(null);

const copyPwdToClipBoard = useCallback(()=>{
window.navigator.clipboard.writeText(password);
},[password]) 
// only change when password change

  // [] = thay are dependencies of password 
  // use callback is used to maintain data in cache and to optimise
  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {

      str += "0123456789";
      
    }

    if (charAllowed) {
      str += "!@#$%^&*";
      
    }

    for (let i = 1; i <=length; i++){

      let ran = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(ran);
     
    }

    setPassword(pass);

  }, [length, numberAllowed,charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator();

  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 my-16 text-orange-500 bg-gray-700 '>
    <h1 className='text-2xl text-center'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden  '>
       <input type='text' value={password} placeholder='Password' className='outline-none w-full py-1 px-3 mb-4 readOnly rounded-lg' ref={passwoedref}></input>
       <button className='outline-none bg-blue-700 text-white py-0.5 px-3 mb-4 rounded-lg shrink-0' onClick={copyPwdToClipBoard}>Copy</button>
     </div> 

     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' min={6} max={50} value={length} className='cursor-pointer' onChange={(event)=>{
            setLength(event.target.value)
        }}
        ></input>
        <label>Length: {length}</label>
      </div>

     <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={numberAllowed} id='numbers' onChange={()=>{setnumberAllowed((prev) => !prev)}}></input> 
      {/* // to toggle btw prev value is used  */}
      <label htmlFor='numbers'>Numbers</label>
     </div>

     <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={charAllowed} id='chars' onChange={()=>{setcharAllowed((prev) => !prev)}}></input>
      <label htmlFor='chars'>Characters</label>
     </div>

     </div>


    </div>

    </>
  )
}

export default App
