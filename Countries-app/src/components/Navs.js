import React, { Component } from 'react'
// import './navs.css'
import { Link } from 'react-router-dom';
import R from './R.jpg';
 class Navs extends Component {
  render() {
    return (
          <div class="font-[Montserrat] text-white">
         <nav class="flex justify-end items-center py-4 "> 
             <div class=" flex justify-center space-x-2 ml-6">
              <img src={R} alt="cedr" class="shadow-blue-900 shadow-lg rounded-full  ring-2 ring-blue-600 object-cover h-10 w-10" />

<span class="text-[20px] font-bold text-black">
    <span class="">L</span><span class="text-yellow-500">O</span>GO
</span>

</div>
         <div class="container flex flex-wrap justify-end mx-auto mr-6">
         
    <ul class="  flex  space-x-4 text-black uppercase rounded justify-end">
        <li class="justify-end"><Link to="/home">HOME</Link></li>
        <li class="justify-end"><Link to="/Tickets">TICKETS</Link></li>
        <li class="justify-end"><Link to="/Shop">SHOP</Link></li> 
        <li class="justify-end"><Link to="/Signup">SIGN-UP</Link></li> 
      
    </ul>
    </div>
    </nav>
    </div>
      
      

    )
  }
}

export default Navs;
