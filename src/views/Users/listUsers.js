import React from "react";
import axios from "axios";
import './listUsers.scss';
import {withRouter} from 'react-router-dom';

class ListUsers extends React.Component {
    state = {
        lisUser: []
    }
    async componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                this.setState({
                    lisUser: res && res.data && res.data.data ? res.data.data : [],
                })
            })
        // let res = await axios.get('https://reqres.in/api/users?page=2');
        // this.setState({
        //     lisUser: res && res.data && res.data.data ? res.data.data : [],
        // })
    }
    handleViewDetail = (user) => {
        console.log("check props handleViewDetail: ", this.props);
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let mystyle = {
            cursor: 'pointer'
        }
        return(
            <div className="list-user-container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list-user-content">
                    {this.state.lisUser && this.state.lisUser.length > 0 &&
                        this.state.lisUser.map((item, index) => {
                            return(
                                <div className="child" key={item.id} onClick={() => this.handleViewDetail(item)} style={mystyle}>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        )
    } 
};

export default withRouter(ListUsers);