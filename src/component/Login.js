import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn } from '../actions/index';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToPreviousRoute: false,
            username: '',
            password: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.logIn(
          {
            username,
            password,
          },
          () => {
            this.setState({ redirectToPreviousRoute: true })
          }
        )
    }

    handleChange = e => {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName
    
        this.setState(prev => ({
          ...prev,
          [fieldName]: value,
        }))
    }

    render() {
        const { location, errorMsg } = this.props
        const { from } = location.state || { from: { pathname: '/' } }
        const { username, password, redirectToPreviousRoute } = this.state

        if (redirectToPreviousRoute) {
        return <Redirect to={from} />
        }
        return (
            <div className="wrapper">
                {errorMsg && <p>{errorMsg}</p>}
                <div className="enter">
                    <h1>Log in</h1>
                    <form className="form-login" onSubmit={this.handleSubmit}>
                    <div className="enter__login">
                        <label htmlFor="username" className="enter__label">Login</label>
                        <input type="text" className="enter__input" name="username" placeholder="login" onChange={this.handleChange} value={username} data-field-name="username"/>
                    </div>
                    <div className="enter__password">
                        <label htmlFor="password" className="enter__label">Password</label>
                        <input type="password" className="enter__input" name="password" placeholder="password" onChange={this.handleChange} value={password} data-field-name="password"/>
                    </div>
                    <div className="enter__button">
                        <button type="submit" className="enter__btn">Sign up</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errorMsg: state.auth.errorMsg,
})
  
const mapDispatchToProps = dispatch => ({
    logIn: (params, cb) => dispatch(logIn(params, cb)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);