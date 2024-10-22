import React from 'react'

const Background = () => {
  return (
    <>
      <div className='fixed z-[2] w-full h-full'>  
             <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-bold text-xl'> 
             Documents
             </div>
             <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[12vw] p-5 leading-none  z tracking-tight font-extrabold' >Docs</h1>
      </div>
      
    </>
)
}

export default Background