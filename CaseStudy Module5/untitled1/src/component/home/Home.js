import {Component} from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export class Home extends Component{
    render() {
        return(
            <>
            <div className="header">
                <Header/>
            </div>
                <div className="content">
                    <Body/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </>
        );
    }
}