import logo from './logo.svg';
import './App.css';
import {HealthDeclaration} from "./component/HealthDeclaration";
import {ListHealthDeclaration} from "./component/ListHealthDeclaration";
import {NavLink, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <NavLink to={'/'}>List</NavLink>
            <NavLink to={'create'} className='ms -3'>Create</NavLink>

            <Routes>
                <Route path='/' element={<ListHealthDeclaration/>}/>
                <Route path='/Create' element={<HealthDeclaration/>}/>
            </Routes>

            <ToastContainer/>
        </>
    );
}

export default App;
