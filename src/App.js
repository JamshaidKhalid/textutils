import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* passing props to Navbar */}
      <Navbar title="Textutils"/>
      <div className='container'>
        <TextForm/>
      </div>


    </>
  );
}

export default App;
