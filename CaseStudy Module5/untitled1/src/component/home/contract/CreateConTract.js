import {Header} from "../Header";
import {ErrorMessage, Field, Formik, Form} from "formik";
import {ToastContent, toast} from "react-toastify";
import {useNavigate, useNavigation} from "react-router-dom";
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';

import {Footer} from "../Footer";
import {matches} from "@testing-library/jest-dom/dist/utils";

export function CreateConTract() {
    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <Header/>
            </div>
            <Formik initialValues={{
                id: '',
                begin: '',
                after: '',
                money: '',
                title: '',
            }}
                    validationSchema={Yup.object({
                        id: Yup.string()
                            .required(),
                        begin: Yup.string()
                            .required("không được để trống")
                            .matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Ngày sinh phải nhập đúng định dạng ngày/tháng/năm'),
                        after: Yup.string()
                            .required("không được để trống")
                            .matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Ngày sinh phải nhập đúng định dạng ngày/tháng/năm'),
                        money: Yup.number().integer().required("không được để trống")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values)
                            setSubmitting(false)
                            toast(`thêm thành công`)
                            navigate('/')
                        }, 1000)
                    }}
            >{
                ({isSubmitting}) => (
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

                )}</Formik>


            <div className="footer">
                <Footer/>
            </div>
        </>
    );

}