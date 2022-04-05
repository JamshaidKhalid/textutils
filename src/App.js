import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import {useState} from 'react';

function App() {
  //defalut mode is light and it can be only changed by setMode function
  //we will pass this state to Navbar component as props
  const [mode, setMode] = useState('light');

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0a0c17';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return (
    <>
      {/* passing props to Navbar */}
      <Navbar title="Textutils" mode={mode} toogleMode={toogleMode}/>


      {/* container is a bootstrap class, without this the textform was not looking good */}
      <div className='container'>
        <TextForm heading="Enter below your text to analyze" mode={mode}/>
      </div>


    </>
  );
}

export default App;
