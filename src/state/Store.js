import { reducerName } from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({
    reducer: reducerName
})

export default Store