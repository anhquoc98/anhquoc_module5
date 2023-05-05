import {useState} from "react";
import isEmpty from "validator/lib/isEmpty";
import {ErrorMessage, Field, Formik, Form} from "formik";
import {ToastContent, toast} from "react-toastify";
import {useNavigate, useNavigation} from "react-router-dom";
import * as Yup from 'yup'
import {ColorRing} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';


export function FormContact() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    name: 'Nguyễn Văn A',
                    email: 'abc@gmail.com',
                    phone: '0147856581',
                    message: 'abcdaed'
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required("Nhập tên"),
                    email: Yup.string()
                        .required("nhập email")
                        .email("nhập đúng email")
                })

                } onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    console.log(values)
                    setSubmitting(false)
                    toast('thêm thành công')
                    navigate('/')
                }, 1000)
            }}
            >{
                ({isSubmitting}) => (
                    <div className="flex items-center justify-center p-12">
                        <div className="mx-auto w-full max-w-[550px]">
                            <Form>
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Full Name
                                    </label>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    <ErrorMessage name='name' className="form-err" component='span'/>
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"

                                        placeholder="example@domain.com"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    <ErrorMessage name='email' className="form-err" component='span'/>
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="subject"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Phone
                                    </label>
                                    <Field
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your subject"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Message
                                    </label>
                                    <Field
                                        rows={4}
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        defaultValue={""}
                                    />
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
                    </div>
                )
            }</Formik>
        </>

    )
}