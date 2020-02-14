import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../../_actions/lelang';
import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        email: '',
        password: ''
    };
  }

  handleChangeEmail = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handleChangePassword = e => {
      e.preventDefault()
      this.setState({password: e.target.value})
  }

  onSubmit = e => {
      e.preventDefault()
      const data = {
          email: this.state.email,
          password: this.state.password
      }
      this.props.setLogin(data)
  }

  render() {
    const {login} = this.props.lelang
    if(login.success === true) {
        localStorage.setItem("token", login.token)
        return <Redirect to={{pathname: '/'}} />
    }
    return (
      <div>
        <Container maxWidth="sm">
            <fieldset style={{marginBottom: 30}}>
                <h1>LOGIN</h1>
                {login.length === 0 ? '' : login.success === true ? <Alert severity="success">{login.message}</Alert> : <Alert severity="error">{login.message}</Alert>}
                <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} /> <br />      
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword} /> <br /> 
                <button onClick={this.onSubmit}>Login</button>    
            </fieldset>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lelang: state.Lelang
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setLogin: (data) => {
            dispatch(setLogin(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);