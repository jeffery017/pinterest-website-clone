import React from 'react'

export default function Card({height}) {
    const style = {
        margin: "10px", 
        borderRadius: "15px", 
        gridRowEnd: `span ${height}`
    }
  return (
    <div style={style} className='bg-neutral-300 hover:bg-neutral-400'></div>
  )
}
