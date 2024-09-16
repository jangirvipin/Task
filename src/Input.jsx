 import {DATA} from "./assets/Data";
export default function Input(){
    return (
        <div>
        <div className="  h-screen flex justify-center bg-black text-white">
        <div className=" flex flex-col justify-center items-center gap-y-5 ">
                 
                 <div className="flex text-3xl">
              Your Input Data
                 </div>
                <div>
            {DATA.map((item)=>(
                <div>
                    {item}
                </div>
            ))}
            </div>
           
        </div>
              </div>
              </div>
        
    )
}