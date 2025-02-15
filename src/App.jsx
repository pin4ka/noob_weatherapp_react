import { useSelector } from 'react-redux';
import { DataCard, ErrorCard, SearchBar } from './components'
import { useEffect, useState } from 'react';

function App() {
  // const weatHer = useSelector((state) => state.weather.value);
  // console.log('from app', weatHer);
  const [Status, setStatus] = useState(false)

  useEffect(() => {
    // console.log(Status);
  }, [Status])
  return (
    <>
      <div className=' flex justify-center items-center pt-4'>
        <p className='font-bold text-2xl text-neutral-50 '>Noob Weather </p>
      </div>
      <SearchBar />
      <div className='p-4 flex justify-center  ' >
        <div className='bg-[#ededed] p-3 w-[90%] rounded-4xl border-none outline-none shadow-neutral-500 shadow-sm '>
          <div hidden={Status}>
            <DataCard setresStatus={setStatus} />
          </div>
          <div hidden={!Status}>
            <ErrorCard />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
