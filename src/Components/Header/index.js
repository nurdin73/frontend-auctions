import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom';

import './style.css'
import { connect } from 'react-redux';
import { getProfile } from '../../_actions/lelang';
import Navigator from '../Navigator';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  componentDidMount() {
    this.props.getProfile()
  }

  render() {
    const {profile} = this.props.lelang
    return (
      <div>
        <nav className="bg-secondary">
            <Container>
              <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/">Koinobori</Link>
                </div>
                <div className="field-mid">
                    <div className="field-1">
                      <form className="form">
                          <input type="text" className="form-search" name="search" placeholder="Cari Koi Food, Medicine, Equipment..." />
                          <button className="btn-search"><SearchOutlined /></button>
                      </form>
                      <ul>
                        <li><Link to="/">Koi Food</Link></li>
                        <li><Link to="/">Koi Feeder</Link></li>
                        <li><Link to="/">Koi Medicine</Link></li>
                        <li><Link to="/">Pond Equipment</Link></li>
                        <li><Link to="/">Chiller</Link></li>
                        <li><Link to="/">Heater</Link></li>
                      </ul>
                    </div>
                      <div className="cart">
                        <button className="btn-chart"><ShoppingCartOutlined /></button>
                        <span className="badge">10</span>
                      </div>
                </div>
                {localStorage.getItem("token") ? 
                  <div className="nav">
                      <ul className="nav-list">
                          <li className="nav-item"> <Navigator initial={profile.initial} name={profile.name} email={profile.email} /> </li>
                      </ul>
                  </div>
                 : 
                  <div className="nav">
                      <ul className="nav-list">
                          <li className="nav-item"><Link to="/register">Register</Link></li>
                          <li className="nav-item"><Link to="/login">Login</Link></li>
                      </ul>
                  </div>
                 }
              </div>
            </Container>
        </nav>
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
    getProfile: () => {
      dispatch(getProfile())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);