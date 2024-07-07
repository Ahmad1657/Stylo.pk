import "./style.css"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import Swiper from 'swiper';
import 'swiper/css';

import { Routes, Route} from 'react-router-dom'

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainNavbar from './components/MainNavbar'
import Counter from "./components/Counter";

import End from "./components/End";
import { FaBuromobelexperte } from "react-icons/fa";

import Home from "./pages/Home";
import Sale from "./pages/Sale";



function App() {
    return (
    <>
    <MainNavbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summer-24" element={<Sale/>} /> 
    </Routes>
    
    <End />
    {/* <Counter />
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Zoom}
/> */}
   </>
    );
}

export default App;