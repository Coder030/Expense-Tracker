import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Main() {
  const [balance, setBalance] = useState(0.00)
  const [incomeS, setIncomeS] = useState(0.00)
  const [expenseS, setExpenseS] = useState(0.00)
  const [av, setAv] = useState(null)
  const [ev, setEv] = useState(null)
  const [, setFlag] = useState(false)
  const [damn, setDamn] = useState([])
  function check() {
    var input = document.getElementById("way")
    const new2 = input.value;
    var slicedStr = new2.slice(0, 35);
    if (input.value.length >= 35){   // 5 is your maxlength
       alert("You have crossed the word limit ! ")
       input.value = slicedStr
  }

    if (new2.includes(1) || new2.includes(2 ) || new2.includes(3) || new2.includes(4) || new2.includes(5) || new2.includes(6) || new2.includes(7) || new2.includes(8) || new2.includes(9) || new2.includes(0)){
      alert("You cannot have a number in your string !")
      input.value = ""
    }
}


  const handleClick = async (e) => {
    e.preventDefault()
    if(av === "" || ev === ""){
      alert("You gave an empty string")
      return
    }
    setDamn([...damn, av]);
    if(av > 0){
      setFlag(true)

      setIncomeS(incomeS + parseInt(av))
    }
    else {
      setFlag(false)
      setExpenseS(expenseS + Math.abs(av))
    }
    fetch("https://expense-backend-o8m0.onrender.com/", {
        method: 'POST',
        body: JSON.stringify({
          expense: {
            way: ev,
            amount: av
          }
        }),
        headers: {'Content-Type': 'application/json'},
      })

    var history = document.createElement("div");
    history.classList.add("hist")
    // var way = document.createElement("div", {className: 'way'});
    var t = document.createElement("p")
    t.innerText = ev
    t.className = "ways"
    var t2 = document.createElement("p")
    t2.innerText = av
    // t2.className = "ways2"
    if (av>0){
      t2.className = "ways2I"
    }
    else{
      t2.className = "ways2E"
    }
    var ioe2 = document.createElement("div");
    // ioe2.classList.add("ioe2")
    if (av>0){
      ioe2.classList.add("ioe2I")
    }
    else{
      ioe2.classList.add("ioe2E")
    }

    history.appendChild(t);
    history.appendChild(t2);
    history.appendChild(ioe2)
    document.getElementById("root").appendChild(history); 
    }

  useEffect(() => {
    setBalance(incomeS - expenseS)
    setAv("")
    setEv("")
    if(av > 0){
      setFlag(true)}
      else{
        setFlag(false)

      }

    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomeS, expenseS])
  return (
    <div className='card'>
      <h2 className='h'>Expense Tracker</h2>
      <p className='yb'>YOUR BALANCE</p>
      <p className='b'>₹ {parseFloat(balance)}</p>
      <div className='ioe1'>
          <p className='i'>INCOME</p>
          <p className='inc'>₹ {parseFloat(incomeS)}</p>
          <div class="vl"></div>
      <div className='ioe2'>
        <p className='e'>EXPENSE</p>
        <p className='exp'>₹ {parseFloat(expenseS)}</p>
      </div>
      <p className='nt'>New Transaction</p>
      <hr className="hr1" />
      <br />
      <label className='labelfi' htmlFor="wayInp">Way of Transaction: </label>
      <br />
      <form>
        <input  value={ev} placeholder='From where it came, or how it went  ?' type="text" className='wayInp' name="wayInp" onChange={(e) => setEv(e.target.value)} maxLength={35} id='way' onInput={check}/>
        <br />
        <label className='labelfi' htmlFor="incomeInp">Amount: </label>
        <br />
        <input value={av} placeholder='+ for income, - for expense' type="number" className='incomeInp' name="incomeInp" id='incomeInp' onChange={(e) => setAv(e.target.value)} />
        <p id='str'></p>
        <button  onClick={handleClick} className='add' 
        onKeyDown={(e) => {
          if (e.key === "Enter")
              handleClick();
          }}
        >Add new Transaction</button>
      </form>
      <br /><br />
      <p className='nt'>Recent History</p>
      <hr className="hr1" />
      <div className='ways2I'></div>
      </div>
    </div>
  )
  
}

export default Main
