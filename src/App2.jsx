import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import Welcome from "./Welcome";
import Thank from "./Thankyou";
import Input from "./Input";


export default function App2(){
    return(
       
        <BrowserRouter>
        <Routes>
            <Route path="/dash" element={<App />}></Route>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/Thankyou" element={<Thank />}></Route>
            <Route path="/DATA" element={<Input />}></Route>
        </Routes>
        </BrowserRouter>
      
    )
}