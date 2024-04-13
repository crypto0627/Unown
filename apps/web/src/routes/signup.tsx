import React, { useState } from 'react'
import Navbar from './components/Navbar'

export default function Signup() {

  return (
    <div className='md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10' style={{ "padding": "10px" }}>
        <Navbar />
        <div className='row-span-5'></div>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[500px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3' style={{ "marginBottom": "10px" }}>
          <p className='text-xl text-start text-white'>email: </p>
          <input
            type='email'
            placeholder='Type here'
            className='input input-bordered input-info w-full max-w-3xl'
          />
          <p className='text-xl text-start text-white'>password: </p>
          <input
            type='email'
            placeholder='Type here'
            className='input input-bordered input-info w-full max-w-3xl'
          />
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-white">Remember me</span>
              <input type="checkbox" defaultChecked className="checkbox checkbox-info" />
            </label>
          </div>
          <button className="btn">Sign up</button>
        </div>
      </div>
    </div>
  )
}
