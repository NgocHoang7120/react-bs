import React from "react";

class ChildComponent extends React.Component{
    state = {
        firstName: 'C',
        lastName: 'Z'
    }
    render(){
        console.log('>>>check data input: ', this.state);
        return(
            <>
                {/* this.props.name là lấy dữ liệu name từ thằng cha truyền xuống */}
                <div>number: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;