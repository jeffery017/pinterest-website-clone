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
  const btnIcon = "hover:bg-neutral-100 shrink-0"
  const btnTag = "focus:bg-neutral-900 focus:text-white px-4"
  return (
    <nav style={style.nav} className=''>
      <a className={`${btn + btnIcon} `} href="#">
        <img src="/src/assets/pinterest-logo.svg" alt="logo"  className='w-6'/>
      </a>
      <a className={`${btn + btnTag} `}  href="#">Home</a>
      <a className={`${btn + btnTag} `}  href="#">Explore</a>
      <a className={`${btn + btnTag} `}  href="#">Create</a>
      <input className="grow h-12 ps-6 text-start bg-neutral-200 hover:bg-neutral-300 rounded-full" 
      type="text" placeholder="Search"/>
      
      <a className={`${btn + btnIcon} `} href="#">
        <img src="/src/assets/notifications.svg" alt="logo"  className='w-6 fill-orange-500'/>
      </a>
      <a className={`${btn + btnIcon} `} href="#">
        <img src="/src/assets/messages.svg" alt="logo"  className='w-6 '/>
      </a>
      <a className={`${btn + btnIcon} `} href="#">
        <div className="size-6 bg-red-700 rounded-full text-center pt-0.5">
          <p className='text-white font-thin text-sm'>C</p>
        </div>
      </a>
      <a className={`${btn + btnIcon} `} href="#">
        <img src="/src/assets/more.svg" alt="logo"  className='w-4  '/>
      </a>
    </nav>
  )
}
