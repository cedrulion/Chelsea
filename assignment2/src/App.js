import React, { Component } from 'react';

// import './App.css';
import { Route,Routes } from 'react-router-dom';

import Navs from './components/Navs';
import Home from './components/Home';

import Shop from './components/Shop';
import Tickets from './components/Tickets';

import Signup from './components/Signup'


class App extends Component {
 

  render(){



    return (
    <div className="App">
      <div>
       
  
    
      <Routes>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
              <Route path="/Shop" element={<Shop/>}></Route>
              <Route path="/" element={<Navs/>}></Route>
             
              <Route path="/Tickets" element={<Tickets/>}></Route>
              {/* <Route path="/Latest" element={<Latest/>}></Route>
              <Route path="/MensTEAM" element={<MensTEAM/>}></Route>
              
              <Route path="/Shop" element={<Shop/>}></Route> */}

              
            </Routes>
            
        
          </div>    
          {/* <Footer/> */}
    </div>
    
      
  );
  }
}

export default App;
