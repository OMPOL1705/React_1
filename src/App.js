import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import Textform from './components/Textform';

function App() {

  const[mode,setMode] = useState('light');

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const onToggle = (cls) => {
    removeBodyClasses(); 
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }



  

  return (
    <>
    <Navbar mode={mode} onToggle={onToggle}/>
    <About mode={mode} onToggle={onToggle}/>
    {/* <div className="container my-3">
    <Textform head="Enter" mode={mode} onToggle={onToggle}/>

    </div> */}
    </>
  );
}

export default App;
