import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange")
        setText(event.target.value);

    }
    const[text, setText] = useState('Enter Text Here')
    
  return (
    <div className='container'>
      
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" >
    <h2>{props.heading}</h2></label>
  <textarea class="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    
<div className='container my-5'> 
<h1>Your Text Summary</h1>
<p>Your charecters are -- {text.length}</p>
<p>{text.split(" ").length}</p>
<p>{0.008 * text.split(" ").length}</p>
</div>
    
    </div>
    
  )
}
