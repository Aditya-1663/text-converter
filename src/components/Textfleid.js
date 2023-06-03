import React ,{useState} from 'react'

export default function Textfleid(props) {
  const handleclick =()=>{
    console.log("this button is clicked");
    let newtext=text.toUpperCase() ;
    setText(newtext)
  }
  const handleloclick =()=>{
    console.log("this button is clicked");
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const handleonchange =(event)=>{
    console.log("changed");
    setText(event.target.value)
  }
  const [text,setText]=useState('enter the text');
  // text='wrong way to change to state'
  // setText("this is use to set the state"); //througing erroe why i dont know
  return (
    <>
   
    <div className='container '>
    <h1>{props.headingtext}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="8"></textarea>
  
    <button className='btn btn-primary mx-2' onClick={handleclick}>uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleloclick}>lowercase</button>
</div>

<div className='container my-3'>
  <h1>
    Your text summary
  </h1>
  <p>{text.split(" ").length} words, {text.length} char</p>
  {/* {console.log(text)} */}
</div>

</>
  )
}
