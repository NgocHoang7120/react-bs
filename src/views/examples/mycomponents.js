import React from 'react';
import ChildComponent from './ChildComponent';

// class MyComponent kế thừa class Component
class MyComponent extends React.Component {
    //Dùng hàm render để render dữ liệu
    // trả ra cái gì thì return trong render
// cú pháp jsx return 1 khối code
// jsx cho phép viết cú pháp javascript trong html
// khai báo state global
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => this.setState({ firstName: event.target.value })
    handleChangeLasttName = (event) => this.setState({ lastName: event.target.value })
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>check data input (state): ', this.state);
        alert('click me')
    }
    render() {
        console.log('>>>call render:', this.state);
        return(
            <>
                <form action="">
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" value={this.state.lastName} onChange={event => this.handleChangeLasttName(event)} /><br/><br/>
                    <input type="submit" value="Click here" onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name = {'one'}/>
                <ChildComponent name={'two'} />
                <ChildComponent name={'three'} />
            </>

        )
    }
};

export default MyComponent; // mặc nhiên trả ra nhiều thứ