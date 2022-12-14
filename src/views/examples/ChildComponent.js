import React from "react";
import './ChildComponent.scss';
class ChildComponent extends React.Component{
    // state = {
    //     firstName: 'C',
    //     lastName: 'Z'
    // }
    state = {
        showJobs: false,
    }
    
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleDelete = (job) => {
        // alert('x')
        console.log(">>>check job: ", job);
        this.props.deleteAjob(job)
    }

    render(){
        let {showJobs} = this.state
        // console.log('>>>check data input: ', this.state);
        // console.log('>>>check props: ', this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        
        let {arrJobs} = this.props
        return(
            <>
                {/* this.props.name là lấy dữ liệu name từ thằng cha truyền xuống */}
                {/* <div>number: {name} - {age}</div> */}
                {!showJobs && 
                    <div>
                        <button className="btn-show" type="" onClick={() => this.handleShowHide()}>Show</button>
                    </div>}
                {/* {showJobs ===false && <div><button type="">Show</button></div>} */}
                {showJobs && 
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 200) {
                                        return (
                                            <div key={item.id}>{index + 1}: {item.title} - {item.salary}&nbsp;<span onClick={() => this.handleDelete(item)} style={{ cursor: "pointer" }}>x</span> </div>
                                        )
                                    } else{
                                        return null; // {}
                                    }
                                })
                            }</div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>}
            </>
        )
    }
}

export default ChildComponent;