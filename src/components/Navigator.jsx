import React from 'react'

export default function Navigator() {
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
  const btn = "rounded-full p-3  text-center font-semibold "
  const btnIcon = "hover:bg-neutral-200 shrink-0"
  const btnTag = "target:bg-neutral-900 target:text-white px-5 p-4"
  return (
    <nav style={style.nav} className=''>
      {/* Logo */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src="src/assets/pinterest-logo.png" alt="logo"  className='w-6'/>
      </a> 
      {/* Home */}
      <a className={`${btn + btnTag} `}  href="#home" id='home'>Home</a>
      {/* Explore */}
      <a className={`${btn + btnTag} `}  href="#explore" id='explore'>Explore</a>
      {/* Create */}
      <a className={`${btn + btnTag} `}  href="#create" id='create'>Create</a>
      
      {/* Search bar */}
      <input className="grow h-12 ps-6 m-2 text-start bg-neutral-200 hover:bg-neutral-300 rounded-full  outline-0 ring-blue-300 focus:ring-4" 
      type="text" placeholder="Search"/>
      
      {/* notification */}
      <a className={`${btn + btnIcon} relative block `} href="#">
        <img src="src/assets/notifications.svg" alt="logo"  className='w-6 fill-orange-500'/>
        <div className="size-5 bg-red-600 text-white rounded-full text-xs flex justify-center items-center font-normal absolute top-0.5 right-0.5">10</div>
      </a>
      {/* message */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src="src/assets/messages.png" alt="logo"  className='w-6 '/>
      </a>
      {/* account */}
      <a className={`${btn + btnIcon} `} href="#">
        <div className="size-6 bg-red-700 rounded-full text-center pt-0.5">
          <p className='text-white font-thin text-sm'>C</p>
        </div>
      </a>
      {/* more */}
      <a className={`${btn + btnIcon} `} href="#">
        <img src="src/assets/more.svg" alt="logo"  className='w-4  '/>
      </a>
    </nav>
  )
}
