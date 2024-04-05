import React from 'react'
import { TbBell } from "react-icons/tb";
import SaleCard from '../components/SaleCard';

function Dashboard() {
  return (
    <div className='py-3 '>
      <div className="flex justify-between">

{/* top */}

    <h1 className="pl-3 text-xl  font-semibold ">hey james! 👋</h1>
<button type="button"
  className=" mr-3 relative inline-flex items-center  text-sm font-medium text-center "
>
        <TbBell  size={35} className="font-light mb-1"/>
  <span className="sr-only">Notifications</span>
  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
    2
  </div>
</button>

    </div>
    <hr class=" w-full my-4  h-px bg-gray-200  border-0 " />


    {/* second part */}

    <div className='py-3 '><div className="flex justify-between pr-5 pl-2 py-2">



    <h1 className="pl-3 text-xl  font-semibold ">Sale Summary</h1>
    
<select id="countries" class="bg-white  px-1.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[135px] ">
    <option selected>Today</option>
    <option value="US">Yesterday</option>
    
  </select>

    </div></div>

    <div className="flex overflow-x-scroll">
        <SaleCard/>
        <SaleCard/>
        <SaleCard/>
        <SaleCard/>
        <SaleCard/>
        <SaleCard/>
    </div>

    {/* THIRD part */}


    <div className='border-2 my-12 p-4 border-gray-300 w-11/12 mx-auto  font-medium m-3 h-[170px] bg-white rounded-lg'>
    <h1 className=" text-xl  font-semibold ">Inventory Overview - Today</h1>
    <div className="flex mt-3  justify-between ">
      <div className="flex mt-1">
      <div className="rounded h-[15px] w-[15px] bg-green-400 "></div>
      <div className="text-base -mt-1 ml-2 text-[#636979]">Available Stock</div>
      </div>
      <div > 
           <span>10Ltr</span>
      </div>
  
     
      
      </div>
      <hr class=" w-full  h-px bg-gray-200  border-0 " />

    <div className="flex mt-2  justify-between ">
      <div className="flex mt-1">
      <div className="rounded h-[15px] w-[15px] bg-orange-400 "></div>
      <div className="text-base -mt-1 ml-2 text-[#636979]">Available Stock</div>
      </div>
      <div > 
           <span>300Ltr</span>
      </div>
     
      
      </div>
      <hr class=" w-full  h-px bg-gray-200  border-0 " />

    <div className="flex mt-2  justify-between ">
      <div className="flex mt-1">
      <div className="rounded h-[15px] w-[15px] bg-blue-400 "></div>
      <div className="text-base -mt-1 ml-2 text-[#636979]">Available Stock</div>
      </div>
      <div > 
           <span>310Ltr</span>
      </div>
     
      
      </div>
      <hr class=" w-full  h-px bg-gray-200  border-0 " />

   </div>

   <div className='py-3 '>
    
    <div className="flex justify-between pr-5 pl-2 py-2">



<h1 className="pl-3 text-xl  font-semibold ">Revenue Overview</h1>

<select id="countries" class="bg-white font-bold px-1.5 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[135px] ">
<option cla selected>This week</option>
<option value="US">Last week</option>

</select>
</div>
<div className="">
<>
  {/* Component Start */}
  <div className="flex flex-col border-2 border-gray-300  mx-3 items-center  max-w-screen-md mt-2 p-1 pb-6 bg-white rounded-lg  sm:p-8">
   
    <div className="flex items-end  flex-grow w-10/12 mt-2 space-x-2 sm:space-x-3">
    <div className=" flex flex-col items-center flex-grow pb-5 ">
        
        <div className="mb-2 text-xs font-bold text-[#636979]">Jan</div>
        <div className="mb-2 text-xs font-bold text-[#636979]">rrr</div>
        <div className="mb-2 text-xs font-bold text-[#636979]">Jan</div>
        <div className="mb-2 text-xs font-bold text-[#636979]">Jan</div>
       
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-20 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Jan</span>

      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-12 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Tuo</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-8 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Wed</span>
      </div>
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-10 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Thu</span>
      </div>
   
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-8 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Fri</span>
      </div>
   
     
   
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-14 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Sat</span>
      </div>
   
      <div className="relative flex flex-col items-center flex-grow pb-5 group">
        <div className="relative flex flex-col rounded justify-end w-1/2 h-32 bg-[#e1ecff]">
        <div className="relative flex rounded justify-center w-full h-16 bg-blue-400" />
        </div>
        <span className="absolute bottom-0 text-xs font-bold text-[#636979]">Sun</span>
      </div>
   
     
     
     
     
      
      
    </div>
  
  </div>
  {/* Component End  */}
</>

</div>



</div>







</div>
  )
}

export default Dashboard