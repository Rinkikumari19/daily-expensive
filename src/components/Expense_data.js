import React, { useState } from "react";

function Expense_data() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [tittle, setTittle] = useState("");
  const [expense, setExpense] = useState("");
  const [value, setvalue] = useState(false);
  const [data, setData] = useState([]);


  const subBtn = () => {
    setData([...data,{ date: date, name: name, tittle: tittle, expense: expense }]);
    setvalue(true);
  };
  // const viewData = () => {
  //   setData([...data, { date: date, name: name, tittle: tittle, expense: expense }]);
  //   setvalue(true);
  // };
  return (
    <>
      <h1>Expense Tracker Project</h1>
      <div className="info">
        <div>
          <h2>Date </h2>
          <h2>Name</h2>
          <h2>Tittle</h2>
          <h2>Expense</h2>
        </div>

        <div className="input">
          <input
            className="date"
            onChange={(e) => setDate(e.target.value)}
            type="date"
          />
          <br />
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name..."
          />
          <br />
          <input
            type="text"
            onChange={(e) => setTittle(e.target.value)}
            placeholder="Tittle..."
          />
          <br />
          <input
            type="text"
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Expensive..."
          />
          {/* {console.log(name, tittle, expense)} */}
        </div>
      </div>

      <div>
        <button className="sub-btn" onClick={subBtn}>
          <strong>Submit</strong>
        </button>
        <button className="view-btn" >
          <strong>View expenses</strong>
        </button>
      </div>
      {value?
          <table className='heading'>
              <tr>
                {["Date", "Name", "Tittle", "Expense"].map((head) => (
                  <th>{head}</th>
                  
                ))}
              </tr>
            
              {console.log(data, "hiii")}
                {data.length > 0
                  ? data.map((e) => {
                      return (
                        <tr>
                          <td>{e.date}</td>
                          <td>{e.name}</td>
                          <td>{e.tittle}</td>
                          <td>{e.expense}</td>
                        </tr>
                      );
                    })
                  : ""}
          </table>:
        <div></div>}
    </>
  );
}

export default Expense_data;
