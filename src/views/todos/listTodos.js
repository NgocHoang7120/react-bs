import React from "react";
import './listodo.scss';
import InputTodo from "./inputTodo";
import RenderList from "./renderListTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listT: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Watching tivi' },
            { id: 'todo3', title: 'Reading book' },
        ],
        show: true,
    }

    addAtodo = (newTodo) => {
        console.log(">>>check newTodo: ", newTodo);
        let currentTodo = [...this.state.listT, newTodo];
        // // let currentTodo = this.state.listT;
        // // currentTodo.push(currentTodo)
        this.setState({
            listT: currentTodo,
        })
        toast.success("wow so easy !")
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listT;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listT: currentTodo,
        })
        toast.success('Delete done !')
    }

    handleSaveTodo = (todo) => {
        // alert("handleEdit todo !")
        this.setState({
            listT: todo
        })
        // console.log(">>>List Son here: ", todo);
    }

    render() {
        let {listT} = this.state;
        // console.log("check:", listT);
        return(
            <>
                <p>
                    {/* Edit <code>src/App.js</code> and save to reload. */}
                    Simple TODO Apps world from reactJs &#38; my laptop
                </p>
                <div className="list-todo-container">
                    <InputTodo 
                        addAtodo={this.addAtodo}
                    />
                    <RenderList 
                        listT = {listT}
                        handleDeleteTodo={this.handleDeleteTodo}
                        handleSaveTodo={this.handleSaveTodo}
                    />

                    {/* <div className="list-todo-content">
                        {console.log("item.title", listT.title)}
                        {listT && listT.length > 0 &&
                            listT.map((item, index) => {
                                return(
                                    <React.Fragment key={ item.id }>
                                        <div className="todo-child">
                                            <span>{index + 1} - {item.title} </span>
                                            <button className="Edit">Edit</button>
                                            <button className="Delete">Delete</button>
                                        </div>                                    
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>        */}
                </div>   
                  
            </>
        )
    }
};

export default ListTodo;