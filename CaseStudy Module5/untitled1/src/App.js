import logo from './logo.svg';
import './App.css';
import {Home} from "./component/home/Home";
import {CreateConTract} from "./component/home/contract/CreateConTract";
import {ListContract} from "./component/home/contract/ListContract";
import {ListCustomer} from "./component/home/customer/ListCustomer";

function App() {
    return (
        <>
            <ListContract/>
        </>
    );
}

export default App;
