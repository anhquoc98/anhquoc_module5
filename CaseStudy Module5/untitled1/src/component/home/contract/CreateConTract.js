import {Component} from "react";
import {Header} from "../Header";

import {Footer} from "../Footer";

export class CreateConTract extends Component {
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
                                <h3 style={{textAlign: "center"}}>Thêm hợp đồng</h3>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Số hợp đồng"
                                        type="text"
                                        tabIndex={1}
                                        required=""
                                        autoFocus=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Ngày bắt đầu"
                                        type="date"
                                        tabIndex={2}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Ngày kết thúc"
                                        type="date"
                                        tabIndex={3}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Số tiền cọc trước"
                                        type="number"
                                        tabIndex={4}
                                        required=""
                                    />{" "}
                                </fieldset>
                                <fieldset>
                                    {" "}
                                    <input
                                        placeholder="Tổng số tiền thanh toán"
                                        type="number"
                                        tabIndex={5}
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