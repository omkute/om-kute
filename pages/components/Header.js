import React from 'react'

function header() {
  return (
    <div className='flex justify-center m-3 p-2 bg-slate-600 rounded-full fix '>
      <div className="m-3 p-2 cursor-pointer  bg-white rounded-2xl boreder-black">Home</div>
      <div className="m-3 p-2 cursor-pointer  bg-white rounded-2xl boreder-black">Projects</div>
      <div className="m-3 p-2 cursor-pointer  bg-white rounded-2xl boreder-black">Contact me</div>
    </div> 
  )
}

export default header