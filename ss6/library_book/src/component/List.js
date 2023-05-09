import React, { useEffect, useState } from "react";
import * as libraryService from "../service/libraryService";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export function List() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        const listAllBook = async () => {
            const result = await libraryService.findAll();
            setBookList(result);
        };
        listAllBook();
    }, []);

    const handleDelete = async (id) => {
        try {
            await libraryService.remove(id)
            toast.success("Deleted successfully!");
        } catch (error) {
            toast.success("Deleted failed!");
        }
    };

    return (
        <>
            <h1>Library</h1>
            <NavLink to="/create" className="btn btn-success">
                Add a new Book
            </NavLink>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {bookList.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink
                                    to={`edit/${book.id}`}
                                    className="btn btn-primary me-4"
                                >
                                    Edit
                                </NavLink>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </button>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Launch demo modal</button>
                            </td>
                        </tr>

                    );
                })}
                </tbody>
            </table>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
