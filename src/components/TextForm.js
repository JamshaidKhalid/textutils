import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  // these are hooks. Search on react hooks.
  //here text is a variable whose initial value is in useState() and it can be only changed by setText() function
  //this updates the content without reloading the page

  const handleUpClick = () => {
    // console.log("Up clicked");
    setText(text.toUpperCase());
  }

  const handleOnChage = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChage} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>

      <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
