import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MakeAppointment from "./pages/MakeAppointment/MakeAppointment";
import Navbar from "./Shared/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/appointment"
                    element={<MakeAppointment></MakeAppointment>}
                ></Route>
                <Route path="/reviews" element={<About></About>}></Route>
                <Route path="/contact" element={<About></About>}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
