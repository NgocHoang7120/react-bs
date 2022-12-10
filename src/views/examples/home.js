import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/a.jpg"
import { connect } from "react-redux";

class Home extends React.Component {
    state = {
        name: ''
    }

    handleChangeText = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCreateUser = (user) => {
        let id = Math.floor(Math.random()*10000);
        this.props.createUserRedux(user, id)
        
        this.setState({
            name: ''
        })
    }

    componentDidMount() {
            // setTimeout(() => this.props.history.push('/Todos'), 5000)
            // setTimeout(() => console.log('done!!!'),  1000)
            // setTimeout( () => this.props.history.push('/'), 2000)
    }
    handleDelete = (user) => {
        console.log(">>>check user delete: ", user);
        this.props.deleteUserRedux(user)
    }
    render() {
        // console.log(">>>check props: ", this.props);
        let listUserRedux = this.props.dataRedux;
        let mystyle = {
            cursor: 'pointer'
        }
        return(
            <>
                <div>
                    Here is my home page.
                </div>
                <div>
                    <img src={logo} alt="img" style={{height: '100px'}}/>
                </div>
                <div>
                    {listUserRedux && listUserRedux.length > 0 &&
                        listUserRedux.map((item, index) => {
                            return(
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span style={mystyle} onClick={() => this.handleDelete(item)}>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <input type='text' value={this.state.name} onChange={(event) => this.handleChangeText(event)}/>
                    <button type="" onClick={() => this.handleCreateUser(this.state.name)}>ADD</button>
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userD) => dispatch({type: 'delete_user', payload: userD}),
        createUserRedux: (NewUser, id) => dispatch({type: 'create_user', payload: {id: id, name: NewUser}}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
