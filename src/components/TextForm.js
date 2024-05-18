import React,{useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState(""); // text is nothing but it is variable u can change 
  //the value of text variable by using only setText fun

   const handleOnChange = (event)=>{
      setText(event.target.value);
   }
   const handleOnUpClick = ()=>{
       setText(text.toUpperCase());
        props.showAlert("Text has been changed into uppercase",'success');
    }

    const handleOnLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text has been changed into lowercase",'success');
     }

     const handleClearClick = ()=>{
      setText('');
      props.showAlert("Text has been cleared",'success'); // success,warning
   }

  return (
    <>
    <div className='mt-4 container'>
        <h1 className='mt-5'  style={ {backgroundColor : props.mode=== 'light'?'white':'#072751' , color:props.mode=== 'light'?'black': 'white'}} >{props.heading}</h1>
        <div>
        <textarea className="form-control my-4" value={text} id="myBox" onChange={handleOnChange} rows='10'
        style={ {backgroundColor : props.mode=== 'light'?'white':'#072751' , color:props.mode=== 'light'?'black':'white'}}></textarea>
        {/* here on change function is required to call otherwise value of text area will be only value of text
        so user can not type anything however he/she types but still value will be value of text
        so to reflect the change we have called handleOnChange function which will set the value of text
        variable to the text which use has been typing   */}
        </div>
        <button className='btn btn-primary' onClick={handleOnUpClick}>Conver to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleOnLowClick}>Conver to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>


        <div className="container"  style={ {backgroundColor : props.mode=== 'light'?'white':'#072751' , color:props.mode=== 'light'?'black':'white'}}>
            <h1> Your text summary</h1>
            <b> <p>{text.split(" ").length} words and {text.length} characters </p> </b>
         </div>
    </div>

    </>
  )
}
