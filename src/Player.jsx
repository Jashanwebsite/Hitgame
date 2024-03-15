import React, { useEffect, useState } from 'react'
import "./css/Player.css"
import { useDispatch, useSelector } from 'react-redux'
function Player() {
    const state = useSelector(state => state)
    useEffect(() => {
      const player = document.querySelector(".player");
      console.log(state )
      player.style.top = `${state.ystate}px`; // Assuming ystate is in pixels
      player.style.left = `${state.xstate}px`; // Assuming xstate is in pixels
  }, [state]);
  return (
    <div id='player'  className={`    player h-[100px] w-[100px] bg-neutral-600 rounded-full absolute `}>
    </div>
  )
}

export default Player
