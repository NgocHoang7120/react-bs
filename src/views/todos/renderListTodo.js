import React from "react";

class RenderList extends React.Component  {

    state = {
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
                EditTodo: listTodosCopy
            })
            // console.log(">>>check edit todo from catchEdit1:", EditTodo);
            this.props.handleEditTodo(EditTodo);
            // console.log("number 1");
            return;
        }

        //edit
        this.setState({
            EditTodo: todo
        })
        console.log(">>>check edit todo from catchEdit:", todo);
        this.props.handleEditTodo(todo);
    }

    handleOnChangeEdit = (event) => {

        let EditTodoCopy = {...this.state.EditTodo};
        EditTodoCopy.title = event.target.value;
        this.setState({
            EditTodo: EditTodoCopy,
        })
        // console.log(">>>check EditTodo: ", this.state.EditTodo);
    }

    render() {
        let { EditTodo } = this.state;
        let isEmptyObj = Object.keys(EditTodo).length === 0;
        // console.log(">>>check isEmptyObj: ", isEmptyObj);

        return(
            <div className="list-todo-content">
                {/* {console.log("item.title", listT.title)} */}
                {this.props.listT && this.props.listT.length > 0 &&
                    this.props.listT.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="todo-child">
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {EditTodo.id === item.id?
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
                                            </>
                                            :"Edit"
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