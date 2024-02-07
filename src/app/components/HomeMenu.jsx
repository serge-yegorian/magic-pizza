
import React from 'react'
import HomeSection from './HomeSection'
import MenuItem from './MenuItem'

const HomeMenu = () => {
  return (
    <section className='bg-slate-900 px-8 py-8'>
      <HomeSection header={"MENU"}/>
      <div className='grid grid-cols-4 gap-8'>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  )
}

export default HomeMenu
