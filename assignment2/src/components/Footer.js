import React, { Component } from 'react';

import R from './R.jpg';

class Footer extends Component {

    render() {
        return (
            <footer class="bg-blue-700 shadow  text-white p-2 border-t">
                <div class="container py-6 px-4 text-center mx-auto ">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class=" hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600  p-4">
                            <h2 class="text-lg font-medium  mb-4 text-center text-lg text-[23px] text-black" ></h2>
                            <div class=" flex justify-center space-x-2 "><img src={R} alt="didier" class="shadow-blue-900 shadow-lg rounded-full  ring-2 ring-blue-600 object-cover h-10 w-10" />

                                <span class="text-[20px] font-bold text-black">
                                    <span class="">L</span><span class="text-yellow-500">O</span>GO
                                </span>

                            </div>
                        </div>
                        <div class="hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600 p-4 space-x-4">
                            <h2 class="text-lg font-medium  mb-4 text-center text-lg text-[23px] text-black">Reach Me Here</h2>
                           
                            <a href="http://twitter.com/cedric">twitter</a>
                            <a href="http://instagram.com/cedric">instagram</a>
                            <a href="http://facebook.com/cedric">facebook</a>
                        </div>
                        <div class="hover:scale-105 shadow-lg shadow-yellow-900 bg-yellow-600  p-4">
                            <h2 class="text-lg font-medium  mb-4 text-center text-lg text-[23px] text-black" >Address</h2>
                            <ul class="text-[18px] text-black">
                                <li>RWANDA</li>
                                <li>Solvit-Africa</li>
                                <li>Tel:0784960378 </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <p class=" text-lg font-medium text-center text-lg text-[23px] text-black">©Copyright 2023 cedric</p>
            </footer>
        );
    }
}

export default Footer;