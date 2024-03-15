import { useEffect } from 'react'
import './App.css'
import Player from './Player'
import Store from "./state/Store.js"
import { Provider, useDispatch, useSelector } from 'react-redux'
import { xstate, ystate } from './state/action'
import Screen from './Screen.jsx'

function App() {


  
  return (
    <Provider  store={Store}>
      <Screen></Screen>
      
    </Provider>
  )
}

export default App

