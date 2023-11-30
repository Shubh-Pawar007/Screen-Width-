import React, { useEffect, useState } from 'react'

export const Width = () => {
    const [width,setWidth]=useState({innerScreenwidth:window.screen.width,innerScreenHeight:window.screen.height})

    const currentWidth=()=>{
      setWidth({...width,innerScreenHeight:window.innerHeight,innerScreenwidth:window.innerWidth})
    }

    useEffect(()=>{
      window.addEventListener("resize",currentWidth)
      return ()=>{
        window.removeEventListener("resize",currentWidth)
      }
    },[])
  return (
    <div style={{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1>Your Screen Width is <span style={{color:"teal"}}>{width.innerScreenwidth}</span></h1>
        <h1>Your Screen Height is <span style={{color:"teal"}}>{width.innerScreenHeight}</span></h1>

    </div>
  )
}
