import React from 'react'

export default function Card({cardWidth, cardHeight}) {
    const style = {
        margin: "10px", 
        borderRadius: "15px", 
        gridRowEnd: `span ${cardHeight}`
    }

    const btn = "flex items-center justify-center rounded-full grow-0 "
  return (
    <div style={style} className='bg-neutral-300  relative overflow-hidden cursor-pointer'>
      {/* https://picsum.photos/${cardWidth*10}/${cardHeight*10} */}
      {/* https://source.unsplash.com/random/200x200 */}
      <img src={`https://source.unsplash.com/random/${cardWidth*10}x${cardHeight*10} `} alt=""  className='h-full w-full'/>
      <div className='w-full h-full hover:opacity-100 opacity-0 absolute top-0'>
        {/* Mask */}
        <div className=' h-full bg-black opacity-45'>jaja</div>

        {/* Save */}
        <a href="" className={`${btn} m-3 p-3 px-4  bg-red-600 text-white font-semibold absolute end-0 top-0 hover:opacity-85`}>Save</a>
        
        {/* dashboard */}
        <div className='w-full p-3 flex absolute bottom-0 space-x-2'> 
          {/* url button */}
          <a href="" className=''>
            <div className= {`${btn} h-8 px-4 bg-white opacity-90 hover:opacity-100` }>
            img.com
            </div>
          </a>
          <div className='w-1 grow'></div>
          {/* share button */}
          <a href="" className=''>
            <div className={`${btn} bg-white size-8 opacity-100 hover:opacity-90`}>
              <img src="src/assets/more.svg" alt="" className='w-3 m-auto '/>
            </div>
          </a>

          {/* more info */}
          <a href="" className=''>
            <div className={`${btn} bg-white size-8 opacity-100 hover:opacity-90`}>
              <img src="src/assets/more.svg" alt="" className='w-3 m-auto '/>
            </div>
          </a>
      </div>

        
      </div>
    </div>
  )
}
