import About from './About';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// <> </> it is called jsx fragment which is used to return more than one tage
function App() {
  const [switchState , setSwitchState] = useState(false);
  const [mode , setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type) =>{
    setAlert({
      message:msg,
      type:type
    })

    setTimeout( ()=>{
      setAlert(null);
    } , 1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#072751';
       showAlert("Dark mode is on",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is off",'success');
    }
  }
  return (
    <>
        <Navbar title='TextUtils' aboutText='About Us' toggleMode={toggleMode}/> 
        <Alert alert={alert}/>
        <TextForm heading='Enter Text To Analyze' mode={mode} showAlert={showAlert}/>

    </>
  );
}

export default App;
