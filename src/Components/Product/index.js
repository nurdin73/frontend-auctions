import React, { Component } from 'react';
import {Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import './style.css'
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
        <div className="product">
            <div className="product-image">
                <img className="image-item" src="https://placeimg.com/640/480/any" alt="" />
            </div>
            <div className="product-title">
                <Link to="/">Title Product</Link>
            </div>
            <div className="product-price">
                <Typography variant="h6" color="secondary">Rp.400.000</Typography>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;