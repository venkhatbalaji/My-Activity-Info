import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginPageLanded } from '../../redux/modules/start/start.js';
import { updateLogin } from '../../redux/modules/login/login.js';
import { isValid } from '../../util/loginValidation/validation.js';
import cookie from '../../util/cookieHelper/cookie.js';
import '../../styles/login.css';

class LoginPage extends Component {

    validateLogin(){
        const userName = document.getElementById('userName').value;
        const password = document.getElementById('password').value;
        console.log(userName, password)
        if(isValid(userName, password)){
            this.props.updateLogin(userName, true);
            this.props.loginPageLanded(true);
            cookie.updateLogInDetails(userName, true)
        }else{
            alert("Enter the correct login credentials")
        }
    }

    render() {
        return (
            <div className="login-form">
                <h1>Login</h1>
                <div className="form-body">
                    <div className="form-input">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <input id="userName" type="text" placeholder="User Name" />
                    </div>
                    <div className="form-input">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                </div>
                <button className="form-button" onClick={() => this.validateLogin()}>Sign In</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        landOnLogin: state.start.landOnLogin,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loginPageLanded : bindActionCreators(loginPageLanded, dispatch),
        updateLogin : bindActionCreators(updateLogin, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);