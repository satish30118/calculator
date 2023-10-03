import React, { useState } from 'react';


export default function Calculator() {

  const [result , setResult] = useState("");
  let clickHandler = (event)=> {
    setResult(result.concat(event.target.value));
  }

  let clearDisplay = ()=>{
  setResult("")
  }

  const calculate =() =>{
    setResult(eval(result).toString());
  }
  

  return (
    <>
    <hr />
    <h1 className='header'>Welcome To Calculator World</h1>
    <hr />
    <div className="calc">
        <input type="text" placeholder='0' id='input' value={result}/>
        <div className="container">
        <input type="button" className="button" value="9" onClick={clickHandler}/>
        <input type="button" className="button" value="8" onClick={clickHandler}/>
        <input type="button" className="button" value="7" onClick={clickHandler}/>
        <input type="button" className="button" value="6" onClick={clickHandler}/>
        <input type="button" className="button" value="5" onClick={clickHandler}/>
        <input type="button" className="button" value="4" onClick={clickHandler}/>
        <input type="button" className="button" value="3" onClick={clickHandler}/>
        <input type="button" className="button" value="2" onClick={clickHandler}/>
        <input type="button" className="button" value="1" onClick={clickHandler}/>
        <input type="button" className="button" value="0" onClick={clickHandler}/>
        <input type="button" className="button" value="." onClick={clickHandler}/>
        <input type="button" className="button" value="00" onClick={clickHandler}/>
        <input type="button" className="button" value="+" onClick={clickHandler}/>
        <input type="button" className="button" value="-" onClick={clickHandler}/>
        <input type="button" className="button" value="*" onClick={clickHandler}/>
        <input type="button" className="button" value="/" onClick={clickHandler}/>
        <input type="button" className="button" value="(" onClick={clickHandler}/>
        <input type="button" className="button" value=")" onClick={clickHandler}/>
        <input type="button" className="button" value="Clear" onClick={clearDisplay}/>
        <input type="button" className="button" value="%" onClick={clickHandler} />
        <input type="button" className="button" value="=" onClick={calculate}/>

        </div>
       

      
    </div>
    </>
  )
}
