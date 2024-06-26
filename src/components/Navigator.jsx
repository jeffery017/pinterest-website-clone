import React from 'react'
import logo from '../assets/pinterest-logo.svg'
import notifications from '../assets/notifications.svg'
import more from '../assets/more.svg'
import messages from '../assets/messages.svg'

export default function Navigator({isMobile}) {
  const style = {
    nav: {
      padding:"20px",
      position: "fixed",
      height: "80px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      zIndex: "1",

      backgroundColor: "white",
    }, 
  }
  const nav = "h-20 p-4 fixed w-full rounded-none flex items-center justify-center z-10 bg-white bottom-0 shadow-md"
  const navMd = "md:m-10 md:rounded-full "
  const navLg = "lg:m-0 lg:rounded-none lg:top-0 lg:shadow-none"
  const btn = "rounded-full p-3  text-center font-semibold "
  const btnIcon = "hover:bg-neutral-200 shrink-0"
  const btnTag = "target:bg-neutral-900 target:text-white px-5 p-4"
  return (
    <nav  className={`${nav} ${navMd} ${navLg}`}>
      {/* Logo */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src={logo} alt="logo"  className='w-6'/>
      </a> 
      {/* Home */}
      <a className={`${btn + btnTag} `}  href="#home" id='home'>Home</a>
      
      {/* Explore */}
      {<a className={`${btn + btnTag} hidden md:flex`}  href="#explore" id='explore'>Explore</a>}
      {/* Create */}
      { <a className={`${btn + btnTag} hidden md:flex`}  href="#create" id='create'>Create</a>}
      
      {/* Search bar */}
      {!isMobile && <input className="grow h-12 ps-6 m-2 text-start bg-neutral-200 hover:bg-neutral-300 rounded-full  outline-0 ring-blue-300 focus:ring-4" 
      type="text" placeholder="Search"/>}
      
      {/* notification */}
      <a className={`${btn + btnIcon} relative block `} href="#">
        <img src={notifications} alt="logo"  className='w-6 fill-orange-500'/>
        <div className="size-5 bg-red-600 text-white rounded-full text-xs flex justify-center items-center font-normal absolute top-0.5 right-0.5">15</div>
      </a>
      {/* message */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src={messages} alt="logo"  className='w-6 '/>
      </a>
      {/* account */}
      <a className={`${btn + btnIcon} `} href="#">
        <div className="size-6 bg-red-700 rounded-full text-center pt-0.5">
          <p className='text-white font-thin text-sm'>C</p>
        </div>
      </a>
      {/* more */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src={more} alt="logo"  className='w-4  '/>
      </a>
    </nav>
  )
}
