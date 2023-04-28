import {Component} from "react";

export class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            work: '',
            workList: ['ken', 'james']
        }
    }

    handleAddWork() {
        this.setState({
            workList: [...this.state.workList, this.state.work],
            work: ''
        })
    }

    handleInputWork(value) {
        this.setState({
            work: value
        })
    }

    render() {
        return (
            <>
                <h2>Todo List</h2>
                <input value={this.state.work}
                       onChange={(event) => this.handleInputWork(event.target.value)}
                />
                <button onClick={() => this.handleAddWork()}>
                    add
                </button>
                <ul>
                    {
                        this.state.workList.map((work, index) => (
                            <li key={index}>
                                {work}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}