import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {},
    }

    async componentDidMount()  {
        if(this.props.match && this.props.match.params){
            // console.log(">>> check props:", this.props);
            let id = this.props.match.params.id;
            console.log(">>>check id: ", id);
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBack = () => {
        this.props.history.push('/user');
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        console.log(">>>check isEmptyObj: ", isEmptyObj);

        let mystyle = {
            cursor: 'pointer',
            marginTop: '20px',
            boxSizing: 'content-box',
            minWidth: '50px'
        }
        
        return(
            <>
                <div>
                    Detial with id {this.props.match.params.id}
                </div>
                {isEmptyObj === false && 
                    <React.Fragment>
                        <div>User's name: {user.first_name} {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div><img src={user.avatar} alt='img'/></div>
                        <div>
                            <button type="button" onClick={() => this.handleBack()} style={mystyle}>Back</button>
                        </div>
                    </React.Fragment>
                }
            </>
        )
    }
};

export default withRouter(DetailUser);