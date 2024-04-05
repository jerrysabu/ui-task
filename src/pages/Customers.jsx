import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
const Customers = () => {
  return (


    <>
   <>

   <div className='py-3 '>
      <div className="flex items-center ">


<FaArrowLeft className='ml-3'/>

    <h1 className="pl-3 text-xl  font-semibold">Customers</h1>


    </div>
    </div>
   </>
    <div className="customer-list">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between bg-gray-800 text-white px-4 py-2">
          <h1 className="text-xl font-bold">Customers</h1>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            +
          </button>
        </div>
        <div className="flex flex-col overflow-y-auto p-4">
          <input
            type="text"
            className="px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
            placeholder="Search"
          />
          <div className="space-y-2">
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">Jordan Smith</p>
                  <p className="text-sm text-gray-500">Customer ID: 3121</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">Emily Davis</p>
                  <p className="text-sm text-gray-500">Customer ID: 1266</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">Jessica Rodriguez</p>
                  <p className="text-sm text-gray-500">Customer ID: 3321</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">David Brown</p>
                  <p className="text-sm text-gray-500">Customer ID: 1100</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">Christopher Wilson</p>
                  <p className="text-sm text-gray-500">Customer ID: 2211</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
            <div className="flex flex-col bg-white shadow rounded p-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col space-y-1">
                  <p className="text-base font-bold">Ashley Gonzalez</p>
                  <p className="text-sm text-gray-500">Customer ID: 1466</p>
                </div>
                {/* Add similar divs for other customers */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Customers;
