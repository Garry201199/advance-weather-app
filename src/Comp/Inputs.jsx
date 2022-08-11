import React, { useContext, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import WeatherContext from "../Context/WeatherContext";
import { toast } from "react-toastify";
const Inputs = () => {
  const {setQuery ,setUnits, units} = useContext(WeatherContext)

  const [city , setCity ] = useState('')
  const handleSubmit=()=>{
    if( city !== '') {
      setQuery({q:city})
      setCity('')
    }
    console.log(city);
  }

  const handleLocation =()=>{
    toast.info('Fetching current location !')
    if( navigator.geolocation){
      toast.success('Successfully fetched user location !')
      navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position);
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({lat , lon })
      })
    }
  }

  const handleUnits=(e)=>{
    if(e !== units ){
      setUnits(e)
    }
  }
  return (
    <div className="flex flex-row justify-center my-6 gap-8 items-center text-white">
      <div className="flex flex-row w-3/4 justify-start items-center space-x-4  ">
        <input
          type="text"
          value={city}
          onChange={(e)=> setCity(e.target.value)}
          className="rounded-sm capitalize
         text-black focus:outline-none outline-blue-300 p-2 w-full placeholder:lowercase "
          placeholder="Search..."
        ></input>
        <UilSearch
        onClick={()=> handleSubmit()}
          size={30}
          className=" transition ease-out cursor-pointer duration-500 hover:scale-150 text-xl "
        />
        <UilLocationPoint
        onClick={()=> handleLocation()}

          size={30}
          className=" cursor-pointer ease-out duration-500 transition hover:scale-150 text-xl "
        />
      </div>

      <div className="flex flex-row w-1/4 justify-around ">
        <button name='metric'onClick={(e)=>{handleUnits(e.currentTarget.name)}}  className="text-xl font-light transition ease-out cursor-pointer duration-500 hover:scale-150"> °C </button>
        <p className="text-xl" >|</p>
        <button name='imperial' onClick={(e)=>{handleUnits(e.currentTarget.name)}}  className="text-xl font-light transition ease-out cursor-pointer duration-500 hover:scale-150">  °F</button>

       </div>
    </div>
  );
};

export default Inputs;
