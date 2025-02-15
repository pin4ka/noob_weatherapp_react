import { configureStore } from '@reduxjs/toolkit'
import  Weatherreducer  from './Weather/WeathData'
export const store = configureStore({
  reducer: {
    weather: Weatherreducer,
  },
})