import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function DataCard({setresStatus}) {
  const [DataOfWeather, setDataOfWeather] = useState("");
  const [Temperature, setTemperature] = useState('');
  const [Location, setLocation] = useState('');
  const [Status, setStatus] = useState('');
  const [MaxTemp, setMaxTemp] = useState('');
  const [MinTemp, setMinTemp] = useState('');
  const [Icon, setIcon] = useState('');
  const [Feels, setFeels] = useState('')
  const [Humidity, setHumidity] = useState('')
  const weatHer = useSelector((state) => state.weather.value);

  async function updateData() {
    try {
      setDataOfWeather(await weatHer);
      try{
        if (DataOfWeather.ErrHide) {
          
          setresStatus(DataOfWeather.ErrHide);
        } else {
          setresStatus(false);
          
        }
      }catch{
        console.log('all ok');
        
      }
      
    } catch {
      console.log('err');
    }
  }

  useEffect(() => {
    try {
      updateData();
      setDataOfWeather(weatHer);
      setTemperature(((DataOfWeather.main.temp) - 273.15).toFixed());
      setLocation(DataOfWeather.name);
      setStatus(DataOfWeather.weather[0].main)
      setMaxTemp(((DataOfWeather.main.temp_max) - 273.15).toFixed());
      setMinTemp(((DataOfWeather.main.temp_min) - 273.15).toFixed());
      setIcon(DataOfWeather.weather[0].icon)
      setFeels(((DataOfWeather.main.feels_like) - 273.15).toFixed());
      setHumidity(DataOfWeather.main.humidity);
      console.log(DataOfWeather);
      

    } catch (err) {
      // console.log(err);
    }
  }, [weatHer, DataOfWeather, updateData, setDataOfWeather]);


  return (
    <div className=" text-gray-500 " >
      <div className="my-4 font-mono text-2xl flex justify-center items-center">
        <p className="text-4xl"> {Location} </p>
      </div>
      <div className="flex ">
        <div className="w-[60%] flex justify-center  items-start ">
          <p className="text-8xl font-sans font-thin">
            {Temperature}&deg;C
          </p>
        </div>
        <div className=" w-[40%]">
          <div>
            <p className="w-[30%] flex flex-wrap font-bold text-gray-600 text-xl ">
              {Status}
            </p>
          </div>
          <div className="flex justify-center my-4">
            <div>
              <p className="my-4">Max: {MaxTemp}&deg;C</p>
              <p className="my-4">Min:  {MinTemp}&deg;C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src={`https://openweathermap.org/img/wn/${Icon}@2x.png`} alt="" className="h-60" />
      </div>
      <div className="flex justify-center  p-6 text-gray-400">

        <div className="flex justify-center items-center px-4 font-extralight w-[50%]">
          <div>
            <div className="flex justify-center">
              <p className="text-7xl">{Feels}&deg;C</p>
            </div>
            <div className="flex justify-center">
              <p className="text-2xl font-light">Feels Like</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-4 font-extralight w-[50%]">
          <div>
            <div className="flex justify-center">
              <p className="text-7xl">{Humidity}&#37;</p>
            </div>
            <div className="flex justify-center">
              <p className="text-2xl font-light">Humidity</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
