import React from "react";
import { DATA } from "./assets/Data";

const UserInputsDisplay = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 px-24 max-w-2xl box-border">
                <h1 className="text-3xl font-bold mb-6 text-center">Your Responses</h1>
                <div className="space-y-4">
                    {DATA.map((input, index) => (
                        <div key={index} className="p-4 px-10 border border-gray-300 rounded-md">
                            <div className="flex items-center  justify-between grow">
                               
                                <h2 className="text-xl font-semibold">Question<span>{index + 1}:</span></h2>
                             
                                
                                {input ? (
                                   <p className="text-lg ml-10 text-gray-700 flex-grow truncate overflow-ellipsis whitespace-nowrap">{input}</p>
                                ) : "null"}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <button
                        onClick={() => window.location.href = "/"} // Adjust navigation as needed
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInputsDisplay;
