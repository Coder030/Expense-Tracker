import React, { useState, useEffect } from 'react';


async function fetchData() {
  const response = await fetch("https://expense-backend-o8m0.onrender.com/full");
  const data = await response.json();
  return data;
}

function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sum, setSum] = useState(0)


  useEffect(() => {
    const fetchDataAndHandleState = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false)
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndHandleState();
  }, []);
  useEffect(()=>{
    const elementsToHide = document.querySelectorAll('.hist');
    elementsToHide.forEach(element => {
      element.style.display = 'none';
    });
  }, [])
  useEffect(() => {
    const calculatedSum = data.reduce((acc, item) => acc + Number(item.amount), 0);
    setSum(calculatedSum);
  }, [data]);


  return (
    <div>
      <h1 className='headingering'>This is the full history of your expenses</h1>
      <br /><br />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {Array.isArray(data) && data.length > 0 && (
        <div>
          {data.map((item, index) => {
            if(item.amount > 0){
              return (
                <div className="histAmount">
                  <p className="pPos" key={index}>The way of transaction is {item.way} and the amount is {item.amount}</p>
                  <div className='linePos'/>
                </div>
              )
            }
            else{
              return (
                <div className="histAmount">
                  <p className="pNeg" key={index}>The way of transaction is {item.way} and the amount is {item.amount}</p>
                  <div className='lineNeg'/>
                </div>
              )
            }
          })}
        </div>
      )}
      {data.length === 0 && !loading && <p style={{textAlign: 'center'}}>No transactions have taken place</p>}
     {!loading && sum>0 && data.length!== 0 && <h2 className='profit'>The Profit is {sum}</h2> }
     {!loading && sum<0 && data.length!== 0 && <h2 className='loss'>The Loss is {sum}</h2> }
     {!loading && sum===0 && data.length!== 0 && <h2 className='nothing'>It is a break-even! Amount left is {sum}</h2> }
    </div>
  );
}

export default History;
