import React from 'react'
import style from './MovingBox.module.css'
import { useState, useEffect } from 'react'

const CENTER_POSITION = `calc(50% - 50px)`

const MovingBox = ({x,y}) => {
  const [position,setPosition] = useState({
    top: CENTER_POSITION,
    left: CENTER_POSITION,
  })

  useEffect(() => {
    setPosition({
      ...position,
      top: `calc(50% - 50px + ${-y * 50}px)`,
      left: `calc(50% - 50px + ${x * 50}px)`
    })
  }, [x,y])
  
  
  return (
    <div>
      <div className={style.movingBox} style={position}>
        {/* {x},{y} */}
      </div>
    </div>
  )
}

export default MovingBox