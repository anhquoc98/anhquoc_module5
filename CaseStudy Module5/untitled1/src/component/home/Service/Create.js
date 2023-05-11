import {Header} from "../Header";
import {Footer} from "../Footer";
import {ErrorMessage, Field, Formik, Form} from "formik";
import {ToastContent, toast} from "react-toastify";
import {useNavigate, useNavigation} from "react-router-dom";
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';


export function Create() {
    const navigate = useNavigate();
    return (
        <>
        <Formik initialValues={{
            name: '',
            area: '',

        }}
                validationSchema={Yup.object({
                    name: Yup.string().required(),
                    area: Yup.number().integer(),

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
                <div className="container1">
                    <Form id="contactus" action="" method="post">
                        <h3 style={{textAlign: "center"}}>Thêm mới dịch vụ</h3>
                        <fieldset>
                            {" "}
                            <Field
                                placeholder="Tên dịch vụ"
                                type="text"
                                tabIndex={1}
                                required=""
                                autoFocus=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <Field
                                placeholder="Diện tích"
                                type="text"
                                tabIndex={2}
                                required=""
                            />{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <Field placeholder="Hình ảnh" type="text" tabIndex={3} required=""/>{" "}
                        </fieldset>
                        <fieldset>
                            {" "}
                            <Field
                                placeholder="Mô tả thêm..."
                                tabIndex={5}
                                required=""
                                defaultValue={""}
                            />{" "}
                        </fieldset>

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
            >

        </Formik>


</>
)
    ;

}