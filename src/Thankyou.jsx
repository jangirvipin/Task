import { useNavigate } from "react-router-dom";
import {DATA} from "./assets/Data";

export default function Thank(){
    const navigate=useNavigate();
    function greet(){
        setTimeout(() => {
             window.location.href="/"
        }, 5000);
       
    }
    return(
        <div>
           <div className="  h-screen flex justify-center bg-gray-6">
           <div className=" flex flex-col justify-center items-center gap-y-5 ">
                    
                    <div className="flex text-6xl">
                   Thank you
                    </div>
                    <div className="text-3xl">
                        Your response has been recorded
                    </div>
                    <div className="text-1xl">
                        You can visit our website for more purchase.
                    </div>
                    <button onClick={()=>{navigate("/DATA")}} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Your Inputs</button>
                    
                  
                 </div>
                 </div>
              {greet()}
                
               
        </div>
    )
}