import React, { Children, useMemo, useState } from 'react'
import Card from './Card'

export default function Container({children, isMobile}) {
    const colWidth = isMobile? Math.floor((window.innerWidth - 26)/2): 236
    const gridTemp = isMobile? "1fr 1fr": `repeat(auto-fill, 236px`
    const unit = isMobile ? 9 : 16
    const style = {
        display: "grid",
        gap: `${unit}px`,
        gridTemplateColumns: gridTemp,
        gridAutoRows: `${0}px`,
        justifyContent: "center"
    }
    const heights = Array(40).fill().map( () => 
        Math.round((0.5 + Math.random() + Math.random() + Math.random()) * colWidth)
    )


  return (
    <>
    <h1>{isMobile? "M":"D"}</h1>
    <div style={style} className='absolute top-0 w-full p-2 md:p-0 md:top-8'>
      {
        heights.map(height => <Card 
          width={colWidth} 
          height={height}
          unit={unit}
          isMobile={isMobile} ></Card>)
        }
    </div> 
      </>
  )
}
