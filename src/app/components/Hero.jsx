import React from 'react'

const Hero = () => {
  return (
    <section className='hero-section flex flex-col justify-center p-8' style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className='flex flex-col h-full max-w-[50%] '>
            <h1 className='text-8xl font-bold text-white shad'>Enter the world of MAGIC</h1>
            <p className='text-white text-4xl'>pizza is the missing piece<br/> to open the portal</p>
            <button className='bg-primary-500 w-fit py-2 px-8 rounded-full text-xl mt-4 shadow-lg'>order now 🍕</button>
            <button className='bg-secondary-500 w-fit py-2 px-8 rounded-full text-xl mt-4 shadow-lg'>learn more 🔎</button>
        </div>
    </section>
  )
}

export default Hero
