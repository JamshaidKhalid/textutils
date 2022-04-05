import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* passing props to Navbar */}
      <Navbar title="Textutils"/>


      {/* container is a bootstrap class, without this the textform was not looking good */}
      <div className='container'>
        <TextForm heading="Enter below your text to analyze"/>
      </div>


    </>
  );
}

export default App;
