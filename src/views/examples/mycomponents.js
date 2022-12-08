import React from 'react';
import ChildComponent from './ChildComponent';
import FunctionComponent from './functioncomponent';
import InputComponent from './addComponent';

// class MyComponent kế thừa class Component
class MyComponent extends React.Component {
    //Dùng hàm render để render dữ liệu
    // trả ra cái gì thì return trong render
// cú pháp jsx return 1 khối code
// jsx cho phép viết cú pháp javascript trong html
// khai báo state global
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'a1', title: 'Dev', salary: '100' },
            { id: 'a2', title: 'Test', salary: '200' },
            { id: 'a3', title: 'CD', salary: '300' },
        ]
    }

    addNewjob = (job) =>  {
        console.log("1");
        console.log(">>>check job from parent component: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

        // let currentJob = this.state.arrJobs;
        // currentJob.push(job)
        // this.setState({
        //     arrJobs: currentJob,
        // })

    }

    deleteAjob = (job) => {
        let currentJob = this.state.arrJobs;
        // currentJob = currentJob.filter((item, index) => {
        //     if(item.id !== job.id){
        //         return item;
        //     }
        //     return null;
        // })

        currentJob = currentJob.filter(item => item.id !== job.id) // return theo điều  kiện

        this.setState({
            arrJobs: currentJob
        })

    }

    componentDidMount() {
        console.log("here is componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">>>run didUpdate, ", 'prevState: ', prevState , '\nCurrent state: ', this.state);
    }

    render() {
        // console.log('>>>call render:', this.state);
        return(
            <>
                <InputComponent
                    addNewjob = {this.addNewjob}
                 />

                {/* truyền xuống thằng con thuộc tính name = one, two, three */}
                <ChildComponent 
                name = {'one'}
                age = {'22'}
                arrJobs = {this.state.arrJobs}
                    deleteAjob = {this.deleteAjob}
                />
 
                <FunctionComponent
                    name={'one'}
                    age={'22'}
                    arrJobs={this.state.arrJobs}
                />
            </>

        )
    }
};

export default MyComponent; // mặc nhiên trả ra nhiều thứ