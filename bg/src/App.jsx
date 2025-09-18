import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("indigo")

  return (
    <>
     <body className='flex justify-end flex-col  w-full h-screen duration-200' style={{backgroundColor: color} }>
     <div className=' flex flex-wrap flex-col justify-center bottom-12 p-0 w-full mt-auto'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  text-black rounded-3xl py-4'>
        <button 
        onClick={()=>{setColor("red")}}
        className='bg-white text-black rounded-full py-1 px-4 outline-none shadow-sm'
        style={{backgroundColor:"red"}}>Red</button>
        <button 
        onClick={()=>setColor("green")}
        className='bg bg-white text-black rounded-full py-1 px-4 outline-none shadow-sm'
        style={{backgroundColor:"green"}}>Green</button>
        <button 
        onClick={()=>setColor("blue")}
        className='bg bg-white text-black rounded-full py-1 px-4 outline-none shadow-sm'
        style={{backgroundColor:"blue"}}>Blue</button>
        <button 
        onClick={()=>setColor("yellow")}
        className='bg bg-white text-black rounded-full py-1 px-4 outline-none shadow-sm'
        style={{backgroundColor:"yellow"}}>Yellow</button>
        <button 
        onClick={()=>setColor("pink")}
        className='bg bg-white text-black rounded-full py-1 px-4 outline-none shadow-sm'
        style={{backgroundColor:"pink"}}>Pink</button>
      </div>
     </div>
     </body>
    </>
  )
}

export default App
