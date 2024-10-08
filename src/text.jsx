import { useState } from "react"

export default function Text({state,handle,handle2,current,data}){
    const[input,setinput]=useState(0);
    const[text,settext]=useState(null);

    function check2(){
        if(state.type=="input"){
          return (
            <input className="px-20 py-2 rounded-md" type="number" min="1" max="10" value={input} placeholder="Type number" onChange={(e)=>{setinput(e.target.value),data(current+1,e.target.value)}}></input>
          )
        }
        if(state.type=="text"){
          return (
            <input className="px-20 py-2 rounded-md" type="text" value={text} placeholder="Type text" onChange={(e)=>{settext(e.target.value),data(current+1,e.target.value)}}></input>
          )
        }
      }
      function check3(){
        if(state.type=="input"){
          return (
            <div>{input}</div>
          )
        }
        if(state.type=="text"){
          return (
            <div>{text}</div>
          )
        }
      }

      const handleNext = () => {
       
            settext(""); // Clear text input if it matches the number input
        
        handle();
    };

    return (
        <div>
          <div className="  h-screen flex justify-center bg-gray-6 bg-slate-500">
           <div className=" flex flex-col justify-center items-center gap-y-5 ">
                    
                <div className="text-2xl ">
                   {current+1}. {state.name}
                </div>

                <div>{check3()}</div>
                <div className="my-4">
                   {check2()}
                </div>
                <div className="my-8">
               
<button  onClick={()=>{handleNext()}} class="bg-black mx-5 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Next 
</button>
<button onClick={handle2}  class="bg-black hover:bg-blue-400 mx-28 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Back
</button>
<button onClick={handle}  class="bg-black hover:bg-blue-400  text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Skip
</button>
                   
                </div>
                 </div>
                 </div>
        </div>
    )
}