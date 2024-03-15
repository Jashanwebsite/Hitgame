import React from 'react'
import Player from './Player'
import { useDispatch } from 'react-redux'
import { xstate, ystate } from './state/action'

function Screen() {
    const dispatch = useDispatch()
    function windowClick(e) {
        dispatch(xstate(e.clientX))
        dispatch(ystate(e.clientY))
     }
   
    return (

    <div onClick={windowClick} className='h-screen absolute w-full bg-red-400'>
      <Player></Player>
    </div>
  )
}

export default Screen
