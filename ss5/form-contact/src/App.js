import logo from './logo.svg';
import './App.css';
import {FormContact} from "./compontent/FormContact";
import {NavLink, Route, Routes} from "react-router-dom";
import {Contact} from "./compontent/Contact";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <NavLink to={'/'}>List</NavLink>
            <NavLink to={'create'} className='ms -3'>Create</NavLink>

            <Routes>
                <Route path='/' element={<Contact/>}/>
                <Route path='/Create' element={<FormContact/>}/>
            </Routes>

            <ToastContainer/>
        </>
    );
}

export default App;
