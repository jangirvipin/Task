import { useNavigate } from "react-router-dom"

export default function Welcome(){
    const navigate=useNavigate();
    return (
        <div>
            <div className="flex flex-row justify-center m-1 font-arial">
                <div className=" w-1/5 h-screen bg-gray-800"></div>
                <div className=" w-4/5 h-screen flex justify-center bg-gray-600">
                <div className=" flex flex-col justify-center items-center gap-y-5 ">
                    
                   <div className="flex text-6xl">
                    WELCOME
                   </div>
                   <p>Thank you for using our product</p>
                   <button className="bg-black rounded-md p-3 text-white"
                    onClick={()=>{navigate("/dash")}}>Start the survey</button>
                </div>
                </div>
            </div>
        </div>
    )
}