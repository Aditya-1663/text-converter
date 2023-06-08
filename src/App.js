// import logo from './logo.svg';

// import { render } from '@testing-library/react';
import './App.css';
// import { Routes } from 'react-router-dom';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import Textarea from './components/Textarea'; 
// import Textarea from './components/textarea'; 
import Textflied from './components/Textfleid';
import React, { useState } from 'react'
// import {
//   createBrowserRouter,
//   BrowserRouter as Router,
//   Routes,
//   Link,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";





function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (messeage, type) => {
    setalert({
      msg: messeage,
      type: type   //we can keep the the both variable same one is funcation parameter pass and one to set the alert
    })
    setTimeout(() => {
      setalert(null)



    }, 2000)

  }
  const togglemode = () => {

    if (mode === 'light') {
      setmode('dark');
      // alert("aditya")
      document.body.style.backgroundColor = 'gray';
      showalert(" : the dark mode is enable", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert(" : the light mode is enable", "success");
    }
  }



  return (
    <>
        {/* // this is called fragment tag */}
      <Router>
       


        <Navbar title="aditya" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        {/* <Textflied mode={mode} showalert={showalert}  headingtext="To convert text"/> */}

        <Switch>

          <Route exact path='/about2' ><About /></Route>
          <Route exact path='/'  >
            <Textflied mode={mode} showalert={showalert} headingtext="To convert text" />
          </Route>
        </Switch>





        {/* <div className='container my-5'>

        </div> */}


      </Router>
    </>
  );

}

export default App;
