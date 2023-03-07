import React, { Component } from 'react'
// import './Home.css'
import R from './R.jpg';


export class home extends Component {
  render() {
    return (
      <div class="container mx-auto py-4 px-2 bg-blue-800">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800">
          <div class=" hover:scale-105 bg-white shadow-md p-4">
            <img src={R}/>
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-500">finibus.Donecvelexamassacommodobibendum
            .Integeractristiquesapien.</p>
          </div>
          <div class=" hover:scale-105 bg-white shadow-md p-4">
            <img src={R} alt="hh"/>
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-500">finibus.Donecvelexamassacommodobibendum
            .Integeractristiquesapien.</p>
          </div>
          <div class="hover:scale-105 bg-white shadow-md p-4">
          <img src={R}  />
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-500">Loremiednibhtinciduntfinibus.Donecvelexamassacommodobibendum
            .Intege
            ractristiquesapien.</p>
          </div>
          <div class="hover:scale-105 bg-white shadow-md p-4">
          <img src={R}  />
            <h2 class="text-lg font-medium text-black-800 mb-4 text-center">AboutUs</h2>
            <p class="text-black-700">Loremiednibhtinciduntfinibus.Donecvelexamassacommodobibendum
            .Intege
            ractristiquesapien.</p>
          </div>

        </div>
        
      </div>
      
      
    )
  }
}

export default home;
