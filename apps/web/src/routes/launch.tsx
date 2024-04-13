import React, { useState } from 'react'
import Navbar from './components/Navbar'

export default function Launch() {

  return (
    <div className='md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10' style={{"padding": "10px"}}>
        <Navbar />
        <div className='row-span-5'></div>
        <label className="font-bold flex" style={{ "color": "white" }}>Search for streamer</label>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3' style={{"marginBottom": "10px"}}>
          <p className='text-xl text-start text-white'>Input steamer name: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
            />
            <button className='btn join-item input-bordered input-info rounded' style={{"borderRadius": "30px", "minWidth": "0px"}}>
              Submit
            </button>
          </div>
        </div>
        <label className="font-bold flex" style={{ "color": "white" }}>Streamer register</label>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3'>
          <p className='text-xl text-start text-white'>Input your streamer id: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
