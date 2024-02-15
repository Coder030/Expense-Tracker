import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from './global'; 

function Main() {
  const [balance, setBalance] = useState(0.00)
  const [incomeS, setIncomeS] = useState(0.00)
  const [expenseS, setExpenseS] = useState(0.00)
  const {dmode, setDmode} = useContext(GlobalContext)
  useEffect(() => {
    // Expose your context value globally
    document.body.className = "body" + String(dmode);
  }, [dmode]);

  const [av, setAv] = useState(null)
  const [ev, setEv] = useState(null)
  const [, setFlag] = useState(false)
  const [damn, setDamn] = useState([])
  function check() {
    var input1 = document.getElementById("way")
    var input2 = document.getElementById("incomeInp")
    const new1 = input1.value;
    var slicedStr1 = new1.slice(0, 27);
    if (input1.value.length >= 27){ 
       alert("You have crossed the word limit!")
       input1.value = slicedStr1
  }
    const new2 = input2.value;
    var slicedStr2 = new2.slice(0, 12);
    if (input2.value.length >= 12){ 
      alert("You have crossed the word limit!")
      input2.value = slicedStr2
  }


    if (new1.includes(1) || new1.includes(2 ) || new1.includes(3) || new1.includes(4) || new1.includes(5) || new1.includes(6) || new1.includes(7) || new1.includes(8) || new1.includes(9) || new1.includes(0)){
      alert("You cannot have a number in your string!")
      input1.value = new1.slice(0, -1)
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
    <div className="card">

      <h2 className={`h${dmode ? 'dark-mode' : ''}`}>Expense Tracker</h2>
      <p className={`yb${dmode ? 'dark-mode' : ''}`}>YOUR BALANCE</p>
      <p className={`b${dmode ? 'dark-mode' : ''}`}>₹ {parseFloat(balance)}</p>
      <div className={`ioe1${dmode ? 'dark-mode' : ''}`}>
          <p className={`i${dmode ? 'dark-mode' : ''}`}>INCOME</p>
          <p className='inc'>₹ {parseFloat(incomeS)}</p>
          <div class="vl"></div>
      <div className={`ioe2${dmode ? 'dark-mode' : ''}`}>
        {!dmode && <p className="e">EXPENSE</p>}
        {dmode && <p className="edark-mode">EXPENSE</p>}
        <p className='exp'>₹ {parseFloat(expenseS)}</p>
      </div>
      <p className={`nt${dmode ? 'dark-mode' : ''}`}>New Transaction</p>
      <hr className="hr1" />
      <br />
      <label className={`labelfi${dmode ? 'dark-mode' : ''}`} htmlFor="wayInp">Way of Transaction: </label>
      <br />
      <form>
        <input  value={ev} placeholder='From where it came, or how it went  ?' type="text" className={`wayInp${dmode ? 'dark-mode' : ''}`} name="wayInp" onChange={(e) => setEv(e.target.value)} maxLength={35} id='way' onInput={check}/>
        <br />
        <label className={`labelfi${dmode ? 'dark-mode' : ''}`} htmlFor="incomeInp">Amount: </label>
        <br />
        <input value={av} placeholder='+ for income, - for expense' type="number" className={`incomeInp${dmode ? 'dark-mode' : ''}`} onInput={check} name="incomeInp" id='incomeInp' onChange={(e) => setAv(e.target.value)} />
        <p id='str'></p>
        <button  onClick={handleClick} className={`add${dmode ? 'dark-mode' : ''}`}
        onKeyDown={(e) => {
          if (e.key === "Enter")
              handleClick();
          }}
        >Add new Transaction</button>
      </form>
      <br /><br />
      <p className={`nt${dmode ? 'dark-mode' : ''}`}>Recent History</p>
      <hr className="hr1" />
      <div className='ways2I'></div>
      </div>
    </div>
  )
  
}

export default Main
