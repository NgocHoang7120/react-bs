import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/a.jpg"
import { connect } from "react-redux";

class Home extends React.Component {
    state = {
        name: '',
        check: {}
    }

    handleChangeText = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCreateUser = (user) => {
        // console.log(">>> check user.trim():", user.trim());
        if (user !== '' && user.trim() !== '') {
            let id = Math.floor(Math.random() * 10000);
            this.props.createUserRedux(user, id)
        }
        
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
    handleEdit = (user) => {
        let {check} = this.state;
        let isEmptyObj = Object.keys(check).length === 0;

        if (isEmptyObj === false && user.id === check.id){
            let listUserReduxCopy = [...this.props.dataRedux];
            let objIndex = listUserReduxCopy.findIndex(item => item.id === check.id);
            listUserReduxCopy[objIndex].name = check.name;
            this.setState({
                check: {}
            })
            this.props.editUserRedux(listUserReduxCopy)
        } else {
            this.setState({
                check: user
            })
        }

    }
    handleChangeValue = (event) => {
        let userCopy = this.state.check;
        userCopy.name = event.target.value;
        this.setState({
            check: userCopy,
        })
    }


    render() {
        // console.log(">>>check props: ", this.props);
        let listUserRedux = this.props.dataRedux;
        let mystyle = {
            cursor: 'pointer'
        }
        let {check} = this.state;
        let isEmptyObj = Object.keys(check).length === 0;
        console.log(">>>check isEmptyObj:", isEmptyObj);
        return(
            <>
                <div>
                    Here is my home page.
                </div>
                <div>
                    <img src={logo} alt="img" style={{height: '100px'}}/>
                </div>
                <div>
                    <input type='text' value={this.state.name} onChange={(event) => this.handleChangeText(event)}/>
                    <button type="" onClick={() => this.handleCreateUser(this.state.name)}>ADD</button>
                </div>
                <div>
                    {listUserRedux && listUserRedux.length > 0 &&
                        listUserRedux.map((item, index) => {
                            return(
                                <div key={item.id}>
                                    {isEmptyObj === true ?
                                        <>
                                            {index + 1} - {item.name} &nbsp;
                                            <span style={mystyle} onClick={() => this.handleDelete(item)}>x</span> &nbsp;
                                        </>
                                        :
                                        <>
                                            {item.id === check.id ?
                                                <>
                                                    {index + 1} - &nbsp;
                                                    <input value={check.name} onChange={(event) => this.handleChangeValue(event)}/> &nbsp;
                                                    {/* <span style={mystyle} onClick={() => this.handleDelete(item)}>x</span> &nbsp; */}
                                                </>
                                                :
                                                <>
                                                    {index + 1} - {item.name} &nbsp;
                                                    <span style={mystyle} onClick={() => this.handleDelete(item)}>x</span> &nbsp;
                                                </>

                                            }
                                        </>
                                    }
                                    <button type="" onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj === false && check.id === item.id ?
                                            'Save':'Edit'
                                        }
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
        dataRedux: state.users,
        postRedux: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userD) => dispatch({type: 'delete_user', payload: userD}),
        createUserRedux: (NewUser, id) => dispatch({type: 'create_user', payload: {id: id, name: NewUser}}),
        editUserRedux: (userEdit) => dispatch({type: 'edit_user', payload: userEdit}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
