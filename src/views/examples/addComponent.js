import React from "react";

class InputComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => this.setState({ titleJob: event.target.value })
    handleChangeSalary = (event) => this.setState({ salary: event.target.value })
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>check data input (state): ', this.state);
        alert('click me')
    }
    
    render() {
        return(
            <>
                {/* <div>Hello add component</div> */}
                <form action="">
                    <label htmlFor="fname">Job:</label><br />
                    <input type="text" value={this.state.titleJob} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={event => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Click here" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
};

export default InputComponent;