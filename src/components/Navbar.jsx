import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiGroupLine  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { TbSettings2 } from "react-icons/tb";
function Navbar() {
  return (
    <>
    {/* component */}
    <div className="w-full h-screen">
      {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile*/}
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 pb-1 z-10 bg-white rounded shadow"
      >
        <div id="tabs" className="flex text-sm justify-between">
            
            <Link className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1">
            
        <RxDashboard size={35} className="inline-block mb-1"/><br />Dashboard
              </Link>
            <Link className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1">
        <BsGraphUpArrow size={35} className="inline-block mb-1"/><br />reports
              </Link>
            <Link to={"/Customers"} className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1">
        <RiGroupLine  size={35} className="inline-block mb-1"/><br />customers
              </Link> 
            <Link className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center pt-2 pb-1">
        <TbSettings2  size={35} className="inline-block mb-1"/><br /> settings
              </Link> 
       
         
         
        </div>
      </section>
    </div>
  </>
  
  )
}

export default Navbar