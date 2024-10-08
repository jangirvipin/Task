import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Thank() {
    const [nav, setNav] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (nav) {
            const timeoutId = setTimeout(() => {
                navigate("/");
            }, 5000);

            // Cleanup function to clear the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [nav, navigate]);

    return (
        <div className="h-screen flex justify-center bg-gray-600">
            <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="flex text-6xl">
                    Thank you
                </div>
                <div className="text-3xl">
                    Your response has been recorded
                </div>
                <div className="text-xl">
                    You can visit our website for more purchases.
                </div>
                <button 
                    onClick={() => { 
                        navigate("/DATA"); 
                        setNav(false); 
                    }} 
                    type="button" 
                    className="text-white bg-black  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black focus:border-black  dark:border-black"
                >
                    Your Inputs
                </button>
            </div>
        </div>
    );
}
