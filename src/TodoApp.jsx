import React from "react";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
    constructor () {
        super();
        this.state = { text: '', items: []};
    }

    handleChange = ({ target: {value}}) => this.setState({ text: value});

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            text: this.state.text,
            id: Date.now(),
        }

        this.setState((state)=> ({
             items: [...state.items, newItem],
             text: '',
            }));
    }


    render(){
        return (
            <div>
                <h3>To Do</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="newTodo">What needs to be done</label>
                    <br />
                    <input 
                    onChange={this.handleChange} 
                    type="text"
                    autoComplete="off"
                    value={this.state.text}
                     />
                    <button>Add #1</button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        )
    }
}

export default TodoApp;