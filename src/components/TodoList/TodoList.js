import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        // this.addTodo = this.addTodo.bind(this)
        // this.removeTodo = this.removeTodo.bind(this)
        // this.editTodo = this.editTodo.bind(this)
        // this.todoTitleHandler = this.todoTitleHandler.bind(this)
        // this.statusHandler = this.statusHandler.bind(this)

    }

    addTask(event){
        event.preventDefault();
        let newTask = {
            id: this.state.todos.length+1,
            content: this.state.todoTitle
        }

        {this.setState((prevState =>(
            prevState.todos = [...this.state.todos , newTask]
        )
        ))}
    }

    inputText(event){
        this.setState({
            todoTitle: event.target.value
        });
    }

    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.addTask.bind(this)}>
                    <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} onChange={this.inputText.bind(this)}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.todos.map(items =>(
                        <Todo {...items} key={items.id}/>
                        ))}
                        
                        
                     
                    </ul>
                </div>
            </>
        )
    }
}
