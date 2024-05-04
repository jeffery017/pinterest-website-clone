import React, { Children } from 'react'

export default function Container({children, cardWidth, unit}) {
    const rowHeight = 10;
    const style = {
      
      marginTop: "70px",
        width: "100%",
        position: "absolute",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${cardWidth*unit}px`,
        gridAutoRows: `${unit}px`,
        justifyContent: "center"
    }


  return (
    <div style={style}>
        {children}
    </div> 
  )
}
