// ATM Machine - UI 
// Authored By Alex Mathew
// Published on 31/10/2022

import './App.css';
import React, { useState } from 'react';

function App() {
  const [amount, setAmount] = useState();
  const [notes, setNotes] = useState([]);

  const handleAmount = (e) => {  //Handling the input amount
    e.preventDefault();
    setAmount(e.target.value);
  };

  const calculatePrice = () => {  //Calculating the notes
    const divideArr = [1000, 500, 100, 50, 20, 10];
    let totArr = [];
    let total = amount;

    divideArr.map((item) => {
      totArr.push(Math.floor(total / item));
      total = total % item;
      return total;
    });

    if (total === 0) {
      setNotes(totArr);
    } else {
      alert('Invalid Input');
    }
  };

  return (
    <div className='App'>
      <h1><b>Welcome to ATM MACHINE</b></h1>
      <div className='atm'>
        <div class='input-group'>
          <input
            type='text'
            value={amount}
            onChange={handleAmount}
            class='form-control'
            placeholder='Please Enter Amount'
            aria-label='Please Enter Amount'
            aria-describedby='button-addon2'
          />
          <button
            class='btn btn-success'
            type='button'
            id='submit'
            onClick={calculatePrice}
          >
            Get Amount
          </button>
        </div>
      </div>
      <div className='denomination'>
        <h2><b>Available Denominations - 1000, 500, 100, 50, 20, 10</b></h2>
        <div class='card'>
          <div class='card-body'>
            <p>1000 Notes - {notes[0]}</p>
            <p>500 Notes - {notes[1]}</p>
            <p>100 Notes - {notes[2]}</p>
            <p>50 Notes - {notes[3]}</p>
            <p>20 Notes - {notes[4]}</p>
            <p>10 Notes - {notes[5]}</p>
            <p><b>Please Collect the Cash</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
