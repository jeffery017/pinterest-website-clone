import React from 'react'
import trarrow from '../assets/top-right-arrow.svg'
import share from '../assets/share.svg'
import moreinfo from '../assets/more-info.svg'


export default function Card({width, height, unit, isMobile}) {
  
    const relativeUnit = isMobile?width/unit/2: unit
    const style = {
        borderRadius: "15px", 
        gridRowEnd: `span ${Math.floor(height/relativeUnit)}`
    }
  // https://picsum.photos/${cardWidth*10}/${cardHeight*10} 
  // https://source.unsplash.com/random/200x200
  const imgURL = `https://source.unsplash.com/${width}x${height} `
  const imgSource = "unsplash.com"

  const btn = "flex items-center justify-center rounded-full grow-0 "
  return (
    <div style={style} className='bg-neutral-300  relative overflow-hidden cursor-pointer'>
      {/* Image */}
      <img src={ imgURL } alt=""  className='w-full '/>
      <div className='w-full h-full hover:opacity-100 opacity-0 absolute top-0'>
        {/* Mask */}
        <div className=' h-full bg-black opacity-45'></div>

        {/* Save */}
        <a href="" className={`${btn} m-3 p-4 px-5  bg-red-600 text-white font-semibold absolute end-0 top-0 hover:bg-red-800`}>Save</a>
        
        {/* dashboard */}
        <div className='w-full p-3 flex absolute bottom-0 space-x-2'> 
          {/* url button */}
          <a href="" className='shrink'>
            <div className= {`${btn}  h-8 px-4 bg-white opacity-85 hover:opacity-100` }>
              <img src={trarrow} alt="" className='w-2.5 me-1.5'/>
              <span className='w-16 truncate text-sm font-semibold'>{ imgSource }</span>
            </div>
          </a>
          <div className='w-1 grow'></div>
          {/* share button */}
          <a href="" className=''>
            <div className={`${btn} bg-white size-8  p-2  opacity-100 hover:opacity-90`}>
              <img src={share} alt="" className='w-full '/>
            </div>
          </a>

          {/* more info */}
          <a href="" className=''>
            <div className={`${btn} bg-white size-8 p-1.5 opacity-100 hover:opacity-90`}>
              <img src={moreinfo} alt="" className='w-full '/>
            </div>
          </a>
      </div>

        
      </div>
    </div>
  )
}
