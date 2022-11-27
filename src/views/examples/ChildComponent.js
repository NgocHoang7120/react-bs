import React from "react";

class ChildComponent extends React.Component{
    state = {
        firstName: 'C',
        lastName: 'Z'
    }
    render(){
        console.log('>>>check data input: ', this.state);
        console.log('>>>check props: ', this.props);
        // let name = this.props.name;
        // let age = this.props.age;

        let {name, age, arrJobs} = this.props
        return(
            <>
                {/* this.props.name là lấy dữ liệu name từ thằng cha truyền xuống */}
                {/* <div>number: {name} - {age}</div> */}
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                            return(
                                <div key={item.id}>{index + 1}: {item.title} - {item.salary}</div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;