import React from 'react'
import HomeSection from './HomeSection'

const HomeAbout = () => {
  return (
    <div className='bg-slate-900 px-8 py-8'>
      <HomeSection header={"ABOUT"}/>
    <div className='flex flex-col text-center justify-center items-center w-full'>
        <p className='text-white w-full max-w-xl text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut necessitatibus aliquam aliquid fugit vel esse asperiores quae accusamus reprehenderit, alias officia sit? Incidunt minima quasi officiis, deserunt sint fugiat.</p>
        <p className='text-white w-full mt-8 text-2xl max-w-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut necessitatibus aliquam aliquid fugit vel esse asperiores quae accusamus reprehenderit, alias officia sit? Incidunt minima quasi officiis, deserunt sint fugiat.</p>
    </div>
    </div>
  )
}

export default HomeAbout
