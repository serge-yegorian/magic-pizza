import React from 'react'
import Image from 'next/image'

const MenuItem = () => {
  return (
    <div className='group hover:bg-slate-100 hover:shadow-2xl hover:shadow-black transition cursor-pointer bg-slate-300  rounded-lg text-center'>
        <div className='overflow-hidden'>
            <Image className=' rounded-t-lg mb-4' width={800} height="800" objectFit='cover' src={'/images/pizza1.png'} alt='pizza'/>
        </div>
        <h4 className='px-8 font-bold text-2xl'>magic pepperoni</h4>
        <p className='px-8 text-slate-700'>
        sweet vegan sausage, marinara sauce, vegan cheese, magic herbs
        </p>
        <button className='group-hover:bg-primary-600 transition text-4xl rounded-b-lg mt-4 bg-primary-500 px-4 py-2 w-full'>22<span className='text-sm'>USD</span></button>
    </div>
  )
}

export default MenuItem
