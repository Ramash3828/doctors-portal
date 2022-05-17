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
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReviews from "./pages/Dashboard/MyReviews";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loading from "./Loading";

function App() {
    return (
        <div className="text-center">
            <Navbar></Navbar>
            {/* <Loading /> */}
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
                <Route
                    path="/dashboard/"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppointment />} />
                    <Route path="myappointment" element={<MyAppointment />} />
                    <Route path="myreviews" element={<MyReviews />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
