import React, {useState} from 'react'


export default function TextForm(props) {
    function handleUpClick(){
       // console.log("Uppercase was clicked" + text)
        let newText=text.toUpperCase();
        setText(newText)
    }
    function handlelowClick(){
      let newText=text.toLowerCase();
      setText(newText)
    }
    function handleClearClick(){
      let newText=" "
      setText(newText)
    }
    function handleOnChange(event){
        //console.log("On change")
        setText(event.target.value)
    }
    const [text, setText]=useState("")
   
  return (
    <>
    <div className='container' >
        <h1>{props.heading}</h1>
    <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode==='light' ? 'white':'white' }} id="myBox" rows="8"></textarea> 
  
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handlelowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
</div>
<div className="container my-3" >
<h2>Enter your text summary</h2>
<p>{text.split(" ").length} words and {text.length} character</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</>
  )
}
