import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="hello"  new="about"/>
    <div className="container my-3">
    <Textform/>

    </div>
    </>
  );
}

export default App;
