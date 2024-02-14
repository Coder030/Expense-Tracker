import React from 'react'
import ss1 from "./ss1.png"
import ss2 from "./ss2.png"
import { useHistory } from 'react-router-dom';


function Main() {
  const history = useHistory();
  const handleClick1 = () => {
    history.push('/home')
  }
  const handleClick2 = () => {
    history.push('/history')
  }
  return (
    <div className='div_ain' style={{position: "relative"}}>
      <h1 className='landing_heading'>Hello and welcome to our landing page</h1>
      <p className='lorem'>Welcome to our expense tracker! In this tracker, you, my friend, can add all your transactions at one place. In the main page, you will only see the <strong><em>very</em></strong> recent transaction, the transaction you typed when you entered the link, or <strong><em>RE-ENTERED</em></strong>... but at the history link, you can see every single one of your transactions!</p>
      <img src={ss1} className='image1' alt="" />
      <img src={ss2} className='image2' alt="" />
      <div className='button-container'>
      <button onClick={handleClick1} className="button_main1" >Make some!</button>
      <button onClick={handleClick2} className="button_main2">See some!!</button>
      </div>
    </div>
  )
}

export default Main
