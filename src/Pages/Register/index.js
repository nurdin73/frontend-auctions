import React, { Component } from 'react';
import { setRegister } from '../../_actions/lelang';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
  }

  handleChangeFirst = e => {
      this.setState({firstName: e.target.value})
  }
  handleChangeLast = e => {
      this.setState({lastName: e.target.value})
  }
  handleChangeEmail = e => {
      this.setState({email: e.target.value})
  }
  handleChangePassword = e => {
      this.setState({password: e.target.value})
  }

  

  onSubmit = e => {
    const dataRegister = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
    }
    this.props.setRegister(dataRegister)
  }

  render() {
    const {register} = this.props.lelang
    if(register.success === true) {
        localStorage.setItem("token", register.token)
    }
    return (
      <div>
        <Container maxWidth="sm">
            <fieldset style={{marginBottom: 30}}>
                <h1>REGISTER</h1>
                <h6>{register === undefined ? '' : register.message}</h6>
                <input type="text" placeholder="First Name" name="name" value={this.state.firstName} onChange={this.handleChangeFirst} /> <br />      
                <input type="text" placeholder="Last Name" name="name" value={this.state.lastName} onChange={this.handleChangeLast} /> <br />      
                <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChangeEmail} /> <br />      
                <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChangePassword} /> <br /> 
                <button onClick={this.onSubmit}>Register</button>    
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
        setRegister: (data) => {
            dispatch(setRegister(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);