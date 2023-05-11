import {Component} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {ErrorMessage, Field, Formik, Form} from "formik";
import {ToastContent, toast} from "react-toastify";
import {useNavigate, useNavigation} from "react-router-dom";
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import {render} from "@testing-library/react";

export function CreateCustomer() {
    const navigate = useNavigate();

        return (
            <>
                <div className="header">
                    <Header/>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="container1">
                            <Formik initialValues={{
                                name: '',
                                phone: '',
                                idCard: '',
                                email: '',
                                birthday: ''
                            }}
                                    validationSchema={Yup.object({
                                        name: Yup.string()
                                            .required("Tên không được để trống")
                                            .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, 'Tên phải đúng định dạng VD: Nguyễn Văn A'),
                                        birthday: Yup.date()
                                            .required('Không được bỏ trống').matches(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'Ngày sinh phải nhập đúng định dạng ngày/tháng/năm'),
                                        idCard: Yup.string()
                                            .required('Không được bỏ trống').matches(/^[0-9]{9,10}$/, 'Số CMND phải đúng định dạng XXXXXXXXX (X là số 0-9)'),
                                        phone: Yup.string()
                                            .required('Không được bỏ trống').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Vui lòng nhập số điện thoại đúng mẫu: 0xxxxxxx'),
                                        email: Yup.string()
                                            .required('Không được bỏ trống').email()
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
                                ({isSubmitting}) => (<Form id="contactus" action="" method="post">
                                    <h3 style={{textAlign: "center"}}>Thêm mới thông tin khách hàng</h3>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="Tên khách hàng"
                                            type="text"
                                            tabIndex={1}
                                            required=""
                                            autoFocus=""
                                            name="name"
                                        /> <ErrorMessage name="name" className="err"></ErrorMessage>
                                        {" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="Ngày sinh"
                                            type="text"
                                            tabIndex={2}
                                            required=""
                                            name="birthday"
                                        />
                                        <ErrorMessage name="birthday" className="err"></ErrorMessage>
                                        {" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="Giới tính"
                                            type="text"
                                            tabIndex={3}
                                            required=""
                                        />{" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="Số CMNN"
                                            type="text"
                                            tabIndex={4}
                                            required=""
                                            name="idCard"
                                        /><ErrorMessage name="idCard" className="err"></ErrorMessage>

                                        {" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field placeholder="Số ĐT" type="text" tabIndex={5} required="" name="phone"/>
                                        <ErrorMessage name="phone" className="err"></ErrorMessage>
                                        {" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="Loại khách"
                                            type="text"
                                            tabIndex={6}
                                            required=""
                                        />{" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
                                            placeholder="email"
                                            type="text"
                                            tabIndex={7}
                                            required=""
                                            name="email"
                                        />
                                        <ErrorMessage name="email" className="err"></ErrorMessage>
                                        {" "}
                                    </fieldset>
                                    <fieldset>
                                        {" "}
                                        <Field
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
                                        {
                                            isSubmitting ?
                                                <ColorRing
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    ariaLabel="block-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass="block-wrapper"
                                                />
                                                :
                                                <button type='submit' className='btn btn-primary'>Submit</button>
                                        }
                                    </fieldset>
                                </Form>)}

                            </Formik>

                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </>
        );
}