import {Component} from "react";
import {Header} from "../Header";

import {Footer} from "../Footer";

export class ListContract extends Component{
    render() {
        return(
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
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
                                <tbody>
                                <tr>
                                    <th scope="row">003</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                </tbody>
                                <tbody>
                                <tr>
                                    <th scope="row">002</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                            id="exampleModal1"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel1">
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
                                </tbody>
                                <tbody>
                                <tr>
                                    <th scope="row">004</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                            id="exampleModal4"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel5">
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
                                </tbody>
                                <tbody>
                                <tr>
                                    <th scope="row">005</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                            id="exampleModal5"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel6">
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
                                </tbody>
                                <tbody>
                                <tr>
                                    <th scope="row">007</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                            id="exampleModal"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                                </tbody>
                                <tbody>
                                <tr>
                                    <th scope="row">008</th>
                                    <td>10-11-2023</td>
                                    <td>10-12-2023</td>
                                    <td>41412</td>
                                    <td>10009</td>
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
                                            id="exampleModal"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                                </tbody>
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