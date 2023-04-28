import {Component} from "react";

export class ListStudent extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    name: 'nguyễn văn a',
                    age: '30',
                    address: 'hà nội'

                },
                {
                    id: 2,
                    name: 'Nguyễn Văn b',
                    age: '23',
                    address: 'đà nẵng'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>age</th>
                        <th>address</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.list.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}