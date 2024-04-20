import "./App.css"
// import ItemDate from './components/itemDate';
// import Item from './item';
// import TextForm from './components/TextForm';

// ...(1)... for project 1
import React from 'react';
import { useState } from 'react';
// import "./App.css";

export default function App() {
  const [count, setcount] = useState(0);

  function incrementHandler() {
    setcount(count + 1);
  }

  function decrementHandler() {
    setcount(count - 1);
  }

  function resetHandler() {
    setcount(0);
  }

  return (
    <div className='w-[100vw] h-[100vw] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className="text-[#0398d4] font-medium text-2xl">Increment & decremnt</div>
      <div className='bg-white flex justify-center py-3 gap-12 rounded-sm text-[#344151]'>
        <button onClick={decrementHandler} className='text-center text-5xl border-r-4 border-[#bfbfbf]'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>
        <button onClick={incrementHandler} className='text-center text-5xl border-l-4 border-[#bfbfbf]'>
          +
        </button>
      </div>
      <button onClick={resetHandler} className='bg-[#0398d4] text-[white] rounded-sm text - lg px-5 py-2'>
        Reset
      </button>
    </div>
  )
}

