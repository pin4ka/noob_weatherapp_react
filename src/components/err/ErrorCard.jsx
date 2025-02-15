import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
export default function ErrorCard() {
  return (
    <div className='flex justify-center items-center h-80 text-4xl text-gray-500'>
        <p className='mx-4'>This location is not found </p>
        <RiErrorWarningLine />
    </div>
  )
}
