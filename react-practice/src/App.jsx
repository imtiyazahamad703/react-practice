import { useState } from "react";

function App() {

  let [count, setCount]=useState(0);
  
  function Add(){ count= count+1;
    console.log(count);
    setCount(count);
   }
  function Remove(){
    if(count>0){
      count=count-1;
      console.log(count);
    setCount(count);
    }
  }
  
  return (
    <>
    <h1>Counter: {count}</h1>

    {/* <button onClick={ ()=>setCount(count+=1) }>+</button> Value <button onClick={ ()=> setCount(count-=1)}>-</button> */}


    <button onClick={Add}>+</button> Value <button onClick={Remove}>-</button>

    </>
  )
}

export default App
