import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {arr} from "./assets/array"
import Button from "./Button";
import Text from "./text";
import {DATA} from "./assets/Data"

function App() {
  const navigate=useNavigate();
       const [current,setcurrent]=useState(0);
       const [state,setstate]=useState(arr[current]);
       
      function handle(){
        if(current==4){
          navigate("/Thankyou");
        }
        setstate(arr[current+1]);
        setcurrent(current+1);
        
      }

      function handle2(){
        if(current==0){
          navigate("/")
        }
        setstate(arr[current-1]);
        setcurrent(current-1);
      }

    function data(a,b){
      DATA[a-1]="INPUT FOR "+a+ "st"+ " "+"question"+" "+ "is" + " "+b;
      console.log(DATA[a]);
    }

      function check(){
        if(state.type=="button"){
          return (
            <Button state={state} data={data} current={current} handle={handle} handle2={handle2} />
          )
        }
        if(state.type=="text" || state.type=="input"){
          return (
            <Text state={state} current={current} handle={handle} handle2={handle2} data={data}/>
          )
        }
      }
      
  return (
   <div>
      <div>
        {check()}
       
      </div>
   </div>
  )
}

export default App
