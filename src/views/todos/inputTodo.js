import React from "react";
import { toast } from 'react-toastify';

class InputTodo extends React.Component {
    state = {
        title: '',
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleOnADD = () => {
        // alert('clicked')
        if(this.state.title){
            this.props.addAtodo({
                id: Math.floor(Math.random() * 10000),
                title: this.state.title,
            })
            this.setState({
                title:  ''
            })

        } else {
            toast.error('missing title !');
            return null;
        }

    }

    render() {
        // console.log(">>>check input title:", this.state.title);
        return(
            <React.Fragment>
                <div className="add-todo">
                    <input type='text' value={this.state.title} onChange={event => this.handleTitleChange(event)} />
                    <button type="button" className="add" onClick={() => this.handleOnADD()}>ADD</button>
                </div>
            </React.Fragment>
        )
    }
};

export default InputTodo;