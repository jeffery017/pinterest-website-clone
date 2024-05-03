import React, { Children } from 'react'

export default function Container({children}) {
    const colWidth = 250;
    const rowHeight = 10;
    const style = {
      
      marginTop: "70px",
        width: "100%",
        position: "absolute",
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, ${colWidth}px`,
        gridAutoRows: `${rowHeight}px`,
        justifyContent: "center"
    }


  return (
    <div style={style}>
        {children}
    </div> 
  )
}
