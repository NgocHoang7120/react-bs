import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/a.jpg"

class Home extends React.Component {
    componentDidMount() {
            // setTimeout(() => this.props.history.push('/Todos'), 5000)
            setTimeout(() => console.log('done!!!'),  1000)
            // setTimeout( () => this.props.history.push('/'), 2000)
    }
    render() {
        // console.log(">>>check props: ", this.props);
        return(
            <>
                <div>
                    Here is my home page.
                </div>
                <div>
                    <img src={logo} alt="img" />
                </div>
            </>
        )
    }
};

// export default withRouter(Home);
export default Color(Home);
