import {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"
                     style={{position: "fixed",zIndex: 2,left: 0,right: 0,top:0,height: "10%",backgroundColor: "#046056"}}>
                    <div className="container-fluid" style={{backgroundColor: "#046056",height: "100%"}}>
                        <a className="navbar-brand" href="#" style={{marginRight: "20px"}}>Furama</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Giới thiệu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ẩm thực</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Loại phòng
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Hạng A</a></li>
                                        <li><a className="dropdown-item" href="#">Phòng hướng biển</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Phòng thuê dài hạn</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1"
                                       aria-disabled="true">Blog</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}