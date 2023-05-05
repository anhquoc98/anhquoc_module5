import {Component} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {ListCustomerFurama} from "../../data/ListCustomerFurama";

export class ListCustomer extends Component{
    render() {
        return(
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="mt-5 pt-5 content" >
                    <>
                        <h2 style={{ textAlign: "center" }}>Danh sách khách hàng</h2>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Tên</th>
                                    <th scope="col">Ngày sinh</th>
                                    <th scope="col">Giới tính</th>
                                    <th scope="col">Số CMND</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Loại khách</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Tác vụ</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ListCustomerFurama.map(customElements=>(
                                    <tr>
                                        <th scope="row">{customElements.id}</th>
                                        <td>{customElements.name}</td>
                                        <td>{customElements.birthDay}</td>
                                        <td>{customElements.gender}</td>
                                        <td>{customElements.numberCMNN}</td>
                                        <td>{customElements.numberPhone}</td>
                                        <td>{customElements.email}</td>
                                        <td>{customElements.title}</td>
                                        <td>{customElements.address}</td>
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

                                ))}

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