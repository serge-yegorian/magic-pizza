import Image from 'next/image'
import React from 'react'

const Enter = () => {
  return (
    <div className='flex justify-center items-center flex-col my-8'>
      <h1 className='text-center text-primary-500 mb-8 font-bold text-4xl'>Enter</h1>
      <form className='max-w-md flex flex-col'>
        <input placeholder='email' type='email'/>
        <input placeholder='password' type="password"/>
        <button className='w-full text-white bg-primary-500 mt-2'>enter</button>
        <p className='text-center w-full text-white mt-4'>or</p>
        <button className=' flex items-center gap-2 w-full mt-4 bg-white'><Image height="30"  width="30" src={'/images/google-logo.png'} /> enter with Google</button>
      </form>
    </div>
  )
}

export default Enter
