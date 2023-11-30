import React, { useEffect, useState } from 'react'

export const Width = () => {
    const [width,setWidth]=useState(window.screen.width)

    const currentWidth=()=>{
      setWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener("resize",currentWidth)
      return ()=>{
        window.removeEventListener("resize",currentWidth)
      }
    },[])
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <h1>Your Screen Width is <span style={{color:"teal"}}>{width}</span></h1>
    </div>
  )
}
