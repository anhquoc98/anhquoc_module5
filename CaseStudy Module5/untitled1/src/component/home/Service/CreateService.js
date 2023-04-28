import {Component} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Edit} from "./Edit";
import {Create} from "./Create";


export class EditService extends Component{
    render() {
        return(
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <Create/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </>
        );
    }
}