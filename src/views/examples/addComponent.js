import React from "react";

class InputComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJob = (event) => this.setState({ title: event.target.value })
    handleChangeSalary = (event) => this.setState({ salary: event.target.value })
    handleSubmit = (event) => {
        console.log("2");
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            // console.log("!this.state.title: ", !this.state.title);
            // console.log("this.state.title: ", this.state.title);
            // console.log("!this.state.salary: ", !this.state.salary);
            // console.log("this.state.salary: ", this.state.salary);
            alert('missing requirement')
            //có thể return; ko cần else ở sau
        } else {
            console.log('>>>check data input (state): ', this.state);
            this.props.addNewjob({
                id: Math.floor(Math.random() * 100),
                title: this.state.title,
                salary: this.state.salary,
            })
        }
        this.setState({
            title: '',
            salary: ''
        })
        // alert('click me')
    }
    
    render() {
        return(
            <>
                {/* <div>Hello add component</div> */}
                <form action="">
                    <label htmlFor="fname">Job:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => this.handleChangeTitleJob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={event => this.handleChangeSalary(event)} /><br /><br />
                    <input type="submit" value="Click here" onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
};

export default InputComponent;