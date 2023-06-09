import {Component} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";

export class Edit extends Component{
    render() {
        return(
            <>
                <div className="container1">
                    <form id="contactus" action="" method="post">
                        <h3 style={{textAlign: "center"}}>Chỉnh sữa dịch vụ</h3>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Tên dịch vụ"
                                type="text"
                                tabIndex={1}
                                required=""
                                autoFocus=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input
                                placeholder="Diện tích"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <input placeholder="Hình ảnh" type="text" tabIndex={3} required=""/>{" "}
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




            </>
        );
    }
}