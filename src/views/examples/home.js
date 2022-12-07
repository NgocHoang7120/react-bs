import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/Todos')
        }, 5000);
    }
    render() {
        console.log(">>>check props: ", this.props);
        return(
            <>
                <div>
                    Here is my home page.
                </div>
            </>
        )
    }
};

export default withRouter(Home);
