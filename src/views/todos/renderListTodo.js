import React from "react";
import { toast, Zoom } from 'react-toastify';

class RenderList extends React.Component  {

    state = {
        // hứng giá trị của thằng cha truyền xuống
        listSon: this.props.listT, // ko render động được
        EditTodo: {}
    }
    catchDeleteButton = (todo) => {
        this.props.handleDeleteTodo(todo)
    }

    catchEditButton = (todo) => {
        let { EditTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        //save
        if (isEmptyObj === false && EditTodo.id === todo.id){
            let listTodosCopy = [...this.props.listT];
            let objIndex = listTodosCopy.findIndex(item => item.id ===todo.id);
            listTodosCopy[objIndex].title = EditTodo.title;
            this.setState({
                listSon: listTodosCopy,
                EditTodo: {}
            })

            this.props.handleSaveTodo(this.state.listSon);
            toast.info('edit done !', {
                transition: Zoom
            })
            return;
        }

        //edit
        this.setState({
            EditTodo: todo
        })
    }

    handleOnChangeEdit = (event) => {

        let EditTodoCopy = {...this.state.EditTodo};
        EditTodoCopy.title = event.target.value;
        this.setState({
            EditTodo: EditTodoCopy,
        })
        
    }

    render() {
        let { EditTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        console.log(">>>check isEmptyObj @@@: ", isEmptyObj);

        return(
            <div className="list-todo-content">
                {this.props.listT && this.props.listT.length > 0 &&
                    this.props.listT.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="todo-child">
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {EditTodo.id === item.id ?
                                                <span>{index + 1} - <input value={EditTodo.title} onChange={(event) => this.handleOnChangeEdit(event)} /> </span>
                                                :
                                                <span>{index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button className="Edit" onClick={() => this.catchEditButton(item)} >
                                        {isEmptyObj === false && EditTodo.id === item.id ?
                                            <>
                                                Save
                                                {/* {console.log(">>>check isEmptyObj from SAVE", isEmptyObj)}
                                                {console.log(">>>>checkkkk:", isEmptyObj === false && EditTodo.id === item.id)} */}
                                            </>
                                            :
                                            <>
                                                {/* {console.log(">>>check isEmptyObj from EDIT", isEmptyObj)} */}
                                                Edit
                                            </>
                                        }
                                    </button>
                                    <button className="Delete" onClick={() => this.catchDeleteButton(item)} >Delete</button>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>   
        )
    }
};

export default RenderList;