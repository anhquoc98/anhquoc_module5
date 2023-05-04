import {Component} from "react";
import {Header} from "../Header";
import {Body} from "../Body";
import {Footer} from "../Footer";

export class EditCustomer extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="container1">
                            <form id="contactus" action="" method="post">
                                <h3 style={{textAlign: "center"}}>Chỉnh sửa thông tin khách hàng</h3>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Tên khách hàng"
                                        type="text"
                                        tabIndex={1}
                                        required=""
                                        autoFocus=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Ngày sinh"
                                        type="text"
                                        tabIndex={2}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Giới tính"
                                        type="text"
                                        tabIndex={3}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Số CMNN"
                                        type="text"
                                        tabIndex={4}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input placeholder="Số ĐT" type="text" tabIndex={5} required=""/>{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Loại khách"
                                        type="text"
                                        tabIndex={6}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Địa chỉ"
                                        type="text"
                                        tabIndex={7}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Loại khách"
                                        type="text"
                                        tabIndex={8}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <textarea
                                        placeholder="Mô tả thêm..."
                                        tabIndex={5}
                                        required=""
                                        defaultValue={""}
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <button
                                        name="submit"
                                        type="submit"
                                        id="contactus-submit"
                                        data-submit="...Sending"
                                    >
                                        <i id="icon" className=""/> Send Now
                                    </button>
                                    {" "}
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </>
        );
    }
}