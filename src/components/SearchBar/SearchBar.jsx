// import React from 'react'
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { WeatherOf } from "../../app/Weather/WeathData";
export default function SearchBar() {
  const Dispatch = useDispatch()
  const [City, setCity] = useState('')
  const [PlaceData, setPlaceData] = useState('')
  const weatHer = useSelector((state) => state.weather.value);
  useEffect(() => {
    setPlaceData(localStorage.getItem('porota'))
  }, [City, weatHer])
  return (
    <div className="p-4 flex justify-center ">
      {/* SearchBar */}
      <div className="bg-[#ededed] flex justify-center items-center  w-[90%] rounded-4xl border-none outline-none shadow-neutral-500 shadow-sm">

        <input
          type="text"
          name="usrfind"
          id="usrfind"
          className="p-3 w-[90%] rounded-l-4xl border-none outline-none"
          value={City}
          onChange={(e) => {
            setCity(e.target.value)
          }}
          placeholder={PlaceData}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              Dispatch(WeatherOf(City));
              setCity('');
            }
          }}
        />

        <button className="p-3 w-[10%] h-[100%] rounded-r-4xl border-none outline-none flex justify-center cursor-pointer text-2xl"
          onClick={() => {
            Dispatch(WeatherOf(City));
            setCity('');
          }}>
          <FaSearch color="#77B0AA" className="text-8" />
        </button>
      </div>
    </div>
  );
}
