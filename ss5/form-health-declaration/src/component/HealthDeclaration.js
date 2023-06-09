import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ColorRing} from "react-loader-spinner";

export function HealthDeclaration() {
    const navigate = useNavigate();
    return (<>
            <Formik
                initialValues={{
                    name: 'Nguyễn Văn A',
                    idCard: '',
                    birthday: 1990,
                    nationality: 'Việt Nam',
                    city: 'Đà Nẵng',
                    district: 'Thanh Khê'
                    ,
                    wards: 'abc',
                    address: 'cba',
                    phone: '5214598741',
                    email: '2548asd@gmail.com'
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Nhập tên"),
                    idCard: Yup.string()
                        .required("nhập chứng minh nhân dân"),
                    birthday: Yup.number().integer()
                        .required("nhập năm sinh")
                        .min(1990, "không đc bé hơn 1990"),
                    nationality: Yup.string()
                        .required("nhập quốc tịch"),
                    city: Yup.string()
                        .required("nhập thành phố"),
                    district: Yup.string()
                        .required("nhập quận"),
                    wards: Yup.string()
                        .required("nhập phường"),
                    address: Yup.string()
                        .required("nhập địa chỉ"),
                    phone: Yup.number().integer()
                        .required("nhập số điện thoại"),
                    email: Yup.string()
                        .required("nhập email")
                        .email("nhập email đúng định dạng abc@gmail.com")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`${values.name} đăng kí thành công`)
                        navigate('/')

                    }, 1000)
                }}
            >{
                ({isSubmitting}) => (

                    <div className='container'>
                        {console.log(isSubmitting)}
                        <h1>Tờ khai báo y tế</h1>
                        <Form className="w-full max-w-lg">

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Họ và tên
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='name'
                                />
                                <ErrorMessage name='name' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Số hộ chiếu /CMND
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='cmnd'
                                />
                                <ErrorMessage name='cmnd' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Năm sinh
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='birthday'
                                />
                                <ErrorMessage name='birthday' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3 d-flex">
                                <label
                                    // className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor=""
                                >
                                    Giới tính
                                </label>
                                <div><Field
                                    // id="nick"
                                    type="radio"
                                    name='gender'
                                    value='nam'
                                /> <label htmlFor="">Nam</label></div>
                                <Field
                                    // id="nick"
                                    type="radio"
                                    name='gender'
                                    value='nữ'
                                /><label>Nữ</label>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Quốc tịch
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='nationality'
                                />
                                <ErrorMessage name='nationality' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Công ty làm việc
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='cty work'
                                />
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Bộ phận làm việc
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='auto-work'

                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="grid-password"
                                >
                                    Có thẻ bảo hiểm y tế
                                </label>
                                <Field
                                    // id="nick"
                                    type="checkbox"
                                    name='yes'
                                />
                            </div>

                            <h3>Địa chỉ liên lạc tại Việt Nam</h3>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Tỉnh thành
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='city'
                                />
                                <ErrorMessage name='city' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Quận/huyện
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='district'
                                />
                                <ErrorMessage name='district' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Phường /xã
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='wards'
                                />
                                <ErrorMessage name='wards' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Số nhà ,phố ,tổ dân phố/thôn/đội
                                </label>
                                <Field
                                    // id="nick"
                                    type="text"
                                    name='address'
                                />
                                <ErrorMessage name='address' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Số điện thoại
                                </label>
                                <Field
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    // id="nick"
                                    type="text"
                                    name='phone'
                                />
                                <ErrorMessage name='phone' component='span' className='form-err'/>
                            </div>

                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    E-mail
                                </label>
                                <Field
                                    id="email"
                                    type="email"
                                    name='email'
                                />
                                <ErrorMessage name='email' component='span' className='form-err'/>

                            </div>

                            <div className="w-full px-3">
                                <h2
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"

                                >
                                    Trong vòng 14 ngày qua,Anh/Chị có đến quốc gia /vùng lãnh thổ nào(Có thể đi qua
                                    nhiều
                                    quốc gia)
                                </h2>
                                <Field
                                    id="message1"
                                    name='message1'
                                />
                            </div>

                            <div className="w-full px-3">
                                <h2
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Trong vòng 14 ngày qua,Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không
                                </h2>
                                <div><Field type="checkbox" name='sốt'/>Sốt</div>
                                <Field type="checkbox" name='Ho'/>Ho
                                <Field type="checkbox" name="1"/>Khó thở
                                <Field type="checkbox" name="2"/>Viêm phổi
                                <Field type="checkbox" name="3"/>Đau họng
                                <Field type="checkbox" name="4"/>Mệt mõi
                            </div>

                            <div className="w-full px-3">
                                <h2
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                >
                                    Trong vòng 14 ngày qua,Anh/Chị có tiếp xúc với ?
                                </h2>
                                <div>
                                    <Field type="checkbox" name="abl"/>
                                    Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
                                </div>
                                <Field type="checkbox" name='2'/>Người từ nước có bệnh Covid-19
                                <Field type="checkbox" name='3'/>Người có biểu hiện (sốt ho, khó thở ,viêm phổi)

                            </div>
                            <div>
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
                            </div>


                        </Form>
                    </div>

                )}

            </Formik>

        </>
    )
}
