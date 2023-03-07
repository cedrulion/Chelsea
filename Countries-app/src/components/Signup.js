import React from 'react'
import NewBlog from './NewBlog';
import background from './background.jpg';
import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Link } from 'react-router-dom';


function Signup() {
 
  return (
    <div class=" font-[Poppins]" >
    <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
    <div class=" flex justify-center space-x-2 ml-6">
              <img src={background} alt="cedr" class="shadow-blue-900 shadow-lg rounded-full  ring-2 ring-blue-600 object-cover h-30 w-30" />

            </div>
        <div class="text-gray-100 text-xl p-6">
            <h1 class="font-bold text-gray-200 text-[15px] ml-3">Dashboard</h1>
          
            </div>
            <div class="text-gray-100 text-xl p-6">
              <Link to="/Newblog">Newblog</Link> 
                </div>
            </div>
            <div class="sidebar fixed top-0 bottom-0 lg:right-0 p-2 w-[300px] overflow-y-auto text-center ">
            <Dropdown title="Day-Profile">
              <Dropdown.Item>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item>
                Log out
              </Dropdown.Item>
            </Dropdown>
            </div>
            <div class="h-screen w-15 flex justify-end items-end ">
            <div class="container  py-4 px-2 bg-gray-500 flex flex-end w-13 p2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-800 flex flex-end">
          <div class=" hover:scale-90 bg-white shadow-md p-2">
            <img src={background} class="w-50"/>
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-500">finibus.Donecvelexamassacommodobibendum
            .Integeractristiquesapien.</p>
          </div>
          <div class=" hover:scale-50 bg-white shadow-md p-4">
            <img src={background} alt="hh"/>
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-500">finibus.Donecvelexamassacommodobibendum
            .Integeractristiquesapien.</p>
          </div>
          </div>
          </div><br />
        
          </div>
          <div class="flex justify-center items-center ">
          <table class=" border-2 border-gray-200 w-6/12">
            <thead class="text-black">
                  <tr>
                   
                    <th class="py-3 bg-gray-800">snn</th>
                    <th class="py-3 bg-gray-800">snn</th>
                    <th class="py-3 bg-gray-800">snn</th>
                    <th class="py-3 bg-gray-800">snn</th>
                   
                  </tr>
            </thead>
            <tbody class="text-center">
            <tr class="hover:bg-cyan-200 bg-white-200 text-black">
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                  
                   
                    </tr>
         <tr class="hover:bg-cyan-200 bg-white-200 text-black">
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                
                    </tr>
         <tr class="hover:bg-cyan-200 bg-white-200 text-black">
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                   
         </tr>
         <tr class=" hover:bg-cyan-200 bg-white-200 text-black">
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                    <th class="py-3 px-6">snn</th>
                   
         </tr>
            </tbody>

          </table>
      
          </div>
          
    </div>
  )
}

export default Signup
