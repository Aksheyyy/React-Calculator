import React, { useState } from 'react';
import './App.css';

function App() {
 const [value,setValue] = useState('')
 const [ans,setAns] = useState(0)

 const buttonClick = (val)=>{
  if(val === '='){
    try{
     const result = eval(value)
      setAns(result)
      setValue(result.toString())
    }catch(err){
        setAns("Error")
    }
  }else if(val === 'AC') {
    setValue('')
    setAns(0)
  }else if(val === 'del'){
    setValue(value.slice(0,-1))
  }else{
    setValue(value+val)
  }
 }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#2d3142' }}>
      <div className="p-3 rounded" style={{ width: '400px', backgroundColor: '#3e4551' }}>
        <h4 className="text-center text-white mb-3">CALCULATOR</h4>
        <input
          type="text"
          className="form-control text-end mb-3"
          value={value}
          readOnly
          style={{ backgroundColor: '#f4f4f4' }}
        />
        <div className="d-grid gap-2">
          <div className="row g-2 mb-2">
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('%')}>%</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('AC')}>AC</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('del')}>&lt;</button>
            <button className="mx-1 col btn btn-primary" onClick={() => buttonClick('/')}>/</button>
          </div>
          <div className="row g-2 mb-2">
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('7')}>7</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('8')}>8</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('9')}>9</button>
            <button className="mx-1 col btn btn-primary" onClick={() => buttonClick('*')}>*</button>
          </div>
          <div className="row g-2 mb-2">
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('4')}>4</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('5')}>5</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('6')}>6</button>
            <button className="mx-1 col btn btn-primary" onClick={() => buttonClick('-')}>-</button>
          </div>
          <div className="row g-2 mb-2">
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('1')}>1</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('2')}>2</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('3')}>3</button>
            <button className="mx-1 col btn btn-primary" onClick={() => buttonClick('+')}>+</button>
          </div>
          <div className="row g-2 mb-2">
            <button className="mx-1 col-6 btn btn-light" onClick={() => buttonClick('0')}>0</button>
            <button className="mx-1 col btn btn-light" onClick={() => buttonClick('.')}>.</button>
            <button className="mx-1 col btn btn-danger" onClick={() => buttonClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
