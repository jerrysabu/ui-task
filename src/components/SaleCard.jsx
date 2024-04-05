import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
function SaleCard() {
  return (
    <div className='border-2 border-gray-300 only:w-[220px]  font-medium m-3 h-[110px] bg-[#f1f2f4] rounded-lg'>
        <div className=" p-4 h-3 flex justify-between ">
            <div className="">Total orders 
            <span className='text-gray-500 text-sm'>(in Litres)</span>
            </div>
        
        
        <div className=" right-0"><BsThreeDotsVertical />
        </div>

        </div>
        <div className="flex ">
        <div className="font-bold text-xl mt-2 p-5 mr-5">300Ltr </div>
        <div className="flex h-6 w-16 mt-8 justify-between bg-[#bdfabd] text-[#53b253] text-xs font-medium me-2 px-2.5 py-1 rounded ">
            <FaArrowUp/>20%</div>
            </div>
   </div>
  )
}

export default SaleCard