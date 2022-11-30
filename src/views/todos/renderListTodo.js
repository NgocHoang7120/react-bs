import React from "react";

class RenderList extends React.Component  {
    render() {
        return(
            <div className="list-todo-content">
                {/* {console.log("item.title", listT.title)} */}
                {this.props.listT && this.props.listT.length > 0 &&
                    this.props.listT.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="todo-child">
                                    <span>{index + 1} - {item.title} </span>
                                    <button className="Edit">Edit</button>
                                    <button className="Delete">Delete</button>
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