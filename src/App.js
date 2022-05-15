import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import MakeAppointment from "./pages/MakeAppointment/MakeAppointment";
import Navbar from "./Shared/Navbar";
import RequireAuth from "./RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <MakeAppointment></MakeAppointment>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/reviews" element={<About></About>}></Route>
                <Route path="/contact" element={<About></About>}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
