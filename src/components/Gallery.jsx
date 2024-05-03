import React, { Children } from 'react'

export default function Container({children, cardWidth}) {
    const rowHeight = 10;
    const style = {
      
      marginTop: "70px",
        width: "100%",
        position: "absolute",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${cardWidth*10}px`,
        gridAutoRows: `${rowHeight}px`,
        justifyContent: "center"
    }


  return (
    <div style={style}>
        {children}
    </div> 
  )
}
