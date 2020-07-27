import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MyActivityInfo from './activityInfo/MyActivityInfo.jsx';
import LoginPage from './login/LoginPage.jsx';

class AppContainer extends Component {

    landingPage(){
        if(this.props.landOnLogin && this.props.userName && this.props.isLoggedIn){
            return(
                <MyActivityInfo />
            );
        } else {
            return(
                <LoginPage />
            );
        }
    }

    render() {
        return (
            <div>
                {this.landingPage()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        landOnLogin: state.start.landOnLogin,
        userName: state.login.user.userName,
        isLoggedIn: state.login.user.isLoggedIn
    };
}


export default connect(mapStateToProps, null)(AppContainer);