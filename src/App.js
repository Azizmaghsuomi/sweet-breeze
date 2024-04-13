import { useState } from "react"
import "./styles.css";

export default function App() {
  return (
    <div>
   <Tipcallculator />
    </div>
  );
}
function Tipcallculator(){
  const [bill,setBill]= useState("")
  const [Persantage1,setPersantage1] = useState(0)
  const [Persantage2,setPersantage2] = useState(0)

  const tip = bill * ((Persantage1 + Persantage2) /2  /100)

  function handelReset() {
    setBill("")
    setPersantage1("")
    setPersantage2("")
  }

return ( <div>
  <BillInput bill={bill} onSetBill={setBill}/>
  <SelectPersantage Persantage={Persantage1} onSelect={setPersantage1}>How did you like the service?</SelectPersantage>
  <SelectPersantage Persantage={Persantage2} onSelect={setPersantage2}>How did your friend like the service?</SelectPersantage>

  {bill > 0 && 
  <>
  <OutPut bill={bill} tip={tip} />
  <Reset onReset={handelReset}/>
  </>
  }
  </div>
  );
}

function BillInput ({bill , onSetBill}){
return ( <div>
  <label>How mach was the bill?</label>
  <input type="text" placeholder="Bill value" value={bill} onChange={e=>onSetBill(Number(e.target.value))}/>
</div> 
);
}

function SelectPersantage({children ,Persantage ,onSelect}){
return ( <div>
  <label>{children}</label>
    <select value={Persantage} onChange={(e)=> onSelect(Number(e.target.value))}>
      <option value="0"> DissatIsfaied (0%)</option>
      <option value="5"> It was Ok (5%)</option>
      <option value="10"> It was good (10%)</option>
      <option value="20"> Abssolutly Amazing! (20%)</option>
    </select>
  </div>
)
}

function OutPut ({bill , tip}){
  return <h3>You pay ${bill + tip} (${bill} + ${tip} tip) </h3>
}

function Reset({onReset}){
  return <button onClick={onReset}>Reset</button>
}