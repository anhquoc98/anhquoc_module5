import {useEffect, useState} from "react";
import {findAll, save} from "../service/TodoService";
import {Field, Form, Formik} from "formik";
import * as TodoService from '../service/TodoService'

export function TodoList() {
    const [toDoList, setToDoList] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await TodoService.findAll()
            setToDoList(result)
        }
        fetchApi()
    }, [])


    return (
        <>
            <Formik initialValues={
                {
                    id: '',
                    title: ''
                }
            } onSubmit={(values) => {
                const input = async () => {
                    await TodoService.save(values)
                    alert('Nhập thành công')
                }
                input()
            }}
            >
                {
                    <Form>
                        <Field type="text"
                               name='title'/>
                        <button>Summit</button>
                    </Form>
                }
            </Formik>
            {toDoList.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}

        </>

    )
}