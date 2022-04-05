import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
  // these are hooks. Search on react hooks.
  //here text is a variable whose initial value is in useState() and it can be only changed by setText() function
  //this updates the content without reloading the page

  const handleUpClick = () => {
    // console.log("Up clicked");
    setText(text.toUpperCase());
  }

  const handleLoClick = () => {
    // console.log("Up clicked");
    setText(text.toLowerCase());
  }


  const handleClearClick = () => {
    // console.log("Up clicked");
    setText('');
  }

  const handleInverseClick = () => {
    let str = '';
    let i = 0;

    while (i < text.length) {
      var n = text.charAt(i);
        if (i%2 === 0) {
            // *Call* toLowerCase
            n = n.toUpperCase();
        } else {
            // *Call* toUpperCase
            n = n.toLowerCase();
        }
      i++;
      str += n;
    }

    setText(str);
  }



  const handleOnChage = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChage} id="exampleFormControlTextarea1" placeholder='Enter your text here' rows="8"></textarea>
        </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleInverseClick}>InVeRsE CaSe</button>
      </div>



      <div className='container mt-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} character</p>
        {/* text.split(" ") gives the arrays of words which are separated at space */}
        {/* this is really amazing. It is a hook. It is performed without reloading the page */}

        {/* suppose 0.008 minutes are required to read one word */}
        <p>{0.008 * (text.split(" ").length-1)} minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>


    </>
  )
}
