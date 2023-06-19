import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const[mode,setMode] = useState('light');

  const onToggle = () => {
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
    <div className="container my-3">
    <Textform head="Enter" mode={mode}/>

    </div>
    </>
  );
}

export default App;
