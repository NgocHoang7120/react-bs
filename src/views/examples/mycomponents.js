import React from 'react';

// class MyComponent kế thừa class Component
class MyComponent extends React.Component {
    //Dùng hàm render để render dữ liệu
    // trả ra cái gì thì return trong render
// cú pháp jsx return 1 khối code
// jsx cho phép viết cú pháp javascript trong html
// khai báo state global
    state = {
        name: 'CNH',
        age: 21,
        address: 'Ha noi'
    }

    render() {
        let name = 'NTH';
        return(
            <React.Fragment> 
                <div className='abc'>
                    hello my component from VsCode, My name is {name}
                </div>
                <div className='123'>
                    okeeee {this.state.address}
                </div>
            </React.Fragment>

        )
    }
};

export default MyComponent; // mặc nhiên trả ra nhiều thứ