import { createSlice } from '@reduxjs/toolkit'
const APIKEY = import.meta.env.VITE_API_KEY;
let City

if (localStorage.getItem('porota')) {
  City = localStorage.getItem('porota')
} else {
  City = 'kolkata'
}

async function getWeather(cityName) {
  let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`)
  // console.log(res.status);
  if (res.status == 200) {
    return await res.json()
  } else {
    // localStorage.setItem('porota', '')
    return { status: 999, condition: 'error', ErrHide: true }
    return { status: 999, condition: 'error', ErrHide: true }
  }
}

const initialState = {
  value: getWeather(City),
}

export const WeatherData = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    initAssign: (state) => {
      state.value = getWeather('kalna')
    },
    WeatherOf: (state, action) => {
      localStorage.setItem('porota', action.payload)
      state.value = getWeather(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { initAssign, WeatherOf } = WeatherData.actions

export default WeatherData.reducer