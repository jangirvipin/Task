import { data } from "autoprefixer";

const arr1=[
        {text:"1"},
        {text:"2"},
        {text:"3"},
        {text:"4"},
        {text:"5"},
];

export default function Button({state,handle,handle2,current,data}){
    
    return (
        <div>
          <div className="  h-screen flex justify-center bg-gray-6 bg-slate-500">
           <div className=" flex flex-col justify-center items-center gap-y-5 ">
                    
                <div className="text-2xl ">
                   {current+1}. {state.name}
                </div>
                <div>
                    {arr1.map((item,index)=>(
                        <button key={index} onClick={function(){data(current+1,index+1)}} id={index} class="bg-blue-500 active:bg-red-600 hover:bg-blue-400 mt-20 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl mx-5">
                        {item.text}
                      </button>
                    ))}
                </div>
                <div className="my-16">
               
<button  onClick={handle} class="bg-black mx-5  hover:bg-blue-400 text-white font-bold  py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
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