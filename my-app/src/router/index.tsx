import { BrowserRouter, Routes, Route } from "react-router-dom";
import Passwordlost from "../pages/Register/passwordlost/passwordlost";
import Register from "../pages/Register";


const Rooter = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/passwordlost" element={<Passwordlost />} />
            </Routes>
        
    );
};

export default Rooter;
