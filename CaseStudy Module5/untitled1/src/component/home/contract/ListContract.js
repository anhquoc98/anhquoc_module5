import {Component} from "react";
import {Header} from "../Header";

import {Footer} from "../Footer";
import {ListContractFurama} from "../../data/ListContractFurama";

export class ListContract extends Component{
    render() {
        return(
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="mt-5 pt-5 content">
                    <>
                        <h2 style={{ textAlign: "center" }}>Danh sách hợp đồng</h2>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Số hợp đồng</th>
                                    <th scope="col">Ngày bắt đầu</th>
                                    <th scope="col">Ngày kết thúc</th>
                                    <th scope="col">Số tiền cọc trước</th>
                                    <th scope="col">Tổng số tiền thanh toán</th>
                                    <th scope="col">Tác vụ</th>
                                </tr>
                                </thead>
                                {ListContractFurama.map(listContract=>(
                                    <tr>
                                        <th scope="row">{listContract.idContract}</th>
                                        <td>{listContract.startDay}</td>
                                        <td>{listContract.endDay}</td>
                                        <td>{listContract.money}</td>
                                        <td>{listContract.title}</td>
                                        <td>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                                style={{ backgroundColor: "gray" }}
                                            >
                                                Sửa
                                            </a>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                                style={{ backgroundColor: "red" }}
                                            >
                                                Xóa
                                            </button>
                                            {/*            modal*/}
                                            <div
                                                className="modal fade"
                                                id="exampleModal2"
                                                tabIndex={-1}
                                                aria-labelledby="exampleModalLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel2">
                                                                Xóa dịch vụ
                                                            </h1>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            />
                                                        </div>
                                                        <div className="modal-body">Bạn muốn xóa khách hàng</div>
                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Thoát
                                                            </button>
                                                            <button type="button" className="btn btn-primary">
                                                                Xóa
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    ))}

                            </table>
                        </div>
                        {/*Phân trang*/}
                        <nav
                            className="d-flex justify-content-center"
                            aria-label="Page navigation example"
                        >
                            <ul className="pagination">
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        Trước
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a
                                        className="page-link"
                                        href="#"
                                        style={{
                                            border: "none",
                                            backgroundColor: "#daeae9",
                                            color: "#1d1d1c"
                                        }}
                                    >
                                        Sau
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </>

                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </>
        );
    }
}