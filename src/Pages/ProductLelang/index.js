import React, { Component } from 'react';
// import { setProduct, getProduct } from '../../_actions/lelang';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import Countdown from 'react-countdown-now'
import './style.css'
import { Redirect } from 'react-router-dom';
class ProductLelang extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        codeProduct: '',
        name: '',
        description: '',
        images: '',
        bidPrice: '',
        startPrice: '',
        offerPrice: '',
        startTime: '',
        longTime: '',
        products: [],
    };
  }

  handleChangeCodeProduct = e => {
      this.setState({codeProduct: e.target.value})
  }
  handleChangeName = e => {
      this.setState({name: e.target.value})
  }
  handleChangeDesc = e => {
      this.setState({description: e.target.value})
  }
  handleChangeBid = e => {
      this.setState({bidPrice: e.target.value})
  }
  handleChangeStartPrice = e => {
      this.setState({startPrice: e.target.value})
  }
  handleChangeOffer = e => {
      this.setState({offerPrice: e.target.value})
  }
  handleChangeStartTime = e => {
      this.setState({startTime: e.target.value})
  }
  handleChangeLongTime = e => {
      this.setState({longTime: e.target.value})
  }
  handleUpload = e => {
      const files = e.target.files[0]
      this.setState({images: files})
  }
handleSubmit = e => {
    e.preventDefault()
    const {codeProduct, name, description, images, bidPrice, startPrice, offerPrice, startTime, longTime} = this.state
    const formData = new FormData()
    formData.append("codeProduct", codeProduct)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("images", images)
    formData.append("bidPrice", bidPrice)
    formData.append("startPrice", startPrice)
    formData.append("offerPrice", offerPrice)
    formData.append("startTime", startTime)
    formData.append("longTime", longTime)
    this.props.setProduct(formData)
    return <Redirect to={{pathname: `/product-lelang`}} />
}

    componentDidMount() {
        this.props.getProduct()
    }
  render() {
    const {setProduct, products} = this.props.lelang
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if(completed) {
            return <Typography>Waktu sudah selesai</Typography>
        } else {
            return (
                <ul className="time">
                    <li className="time-list">
                        <Typography variant="h5">{days}</Typography>
                        <Typography variant="subtitle2">days</Typography>
                    </li>
                    <li className="time-list">
                        <Typography variant="h5">{hours}</Typography>
                        <Typography variant="subtitle2">hours</Typography>
                    </li>
                    <li className="time-list">
                        <Typography variant="h5">{minutes}</Typography>
                        <Typography variant="subtitle2">minutes</Typography>
                    </li>
                    <li className="time-list">
                        <Typography variant="h5">{seconds}</Typography>
                        <Typography variant="subtitle2">seconds</Typography>
                    </li>
                </ul>
            )
        }
    }
    return (
      <div>
        <Container maxWidth="sm">
            <fieldset style={{padding:20, marginBottom:30}}>
                <h5>{setProduct.message}</h5>
                <form encType="multipart/form-data" id="myForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="code product" name="codeProduct" value={this.state.codeProduct} onChange={this.handleChangeCodeProduct} /> <br />
                    <input type="text" placeholder="name" name="name"  value={this.state.name} onChange={this.handleChangeName} /> <br />
                    <input type="text" placeholder="description" name="description"  value={this.state.description} onChange={this.handleChangeDesc} /> <br />
                    <input type="file" placeholder="images" name="images" onChange={this.handleUpload} /> <br />
                    <input type="number" placeholder="bidPrice" name="bidPrice"  value={this.state.bidPrice} onChange={this.handleChangeBid} /> <br />
                    <input type="number" placeholder="startPrice" name="startPrice"  value={this.state.startPrice} onChange={this.handleChangeStartPrice} /> <br />
                    <input type="number" placeholder="offerPrice" name="offerPrice"  value={this.state.offerPrice} onChange={this.handleChangeOffer} /> <br />
                    <input type="date" placeholder="startTime" name="startTime"  value={this.state.startTime} onChange={this.handleChangeStartTime} /> <br />
                    <input type="number" placeholder="longTime" name="longTime"  value={this.state.longTime} onChange={this.handleChangeLongTime} /> <br />
                    <button type="submit">Add product</button>
                </form>
            </fieldset>
        </Container>
        <Container>
            <Grid container spacing={3}>
                {products ? 
                    products.map(res => {
                        return (
                            <Grid item xs={3}>
                                <div className="card">
                                    <img src={`http://localhost:5000/images/${res.image}`} alt="" className="product-image" style={{height:'300px'}} />
                                    <Typography variant="h6">{res.name}</Typography>
                                    <Typography variant="subtitle2">{res.codeProduct}</Typography>
                                    <Typography variant="subtitle1" color="primary">starting bid {res.startPrice}</Typography>
                                    <Typography variant="subtitle2">Time left</Typography>
                                    <Countdown 
                                        
                                        date={Date.now() + res.longTime}
                                        renderer={renderer}
                                    />
                                    <button>Bid</button>
                                </div>                
                            </Grid>
                        )
                    }) : ''
                }
                {/* {products.map(res => {
                    return (
                        <Grid item xs={3}>
                            <div className="card">
                                <img src={`http://localhost:5000/images/${res.image}`} alt="" className="product-image" style={{height:'300px'}} />
                                <Typography variant="h6">{res.name}</Typography>
                                <Typography variant="subtitle2">{res.codeProduct}</Typography>
                                <Typography variant="subtitle1" color="primary">starting bid {res.startPrice}</Typography>
                                <Typography variant="subtitle2">Time left</Typography>
                                <Countdown 
                                    date={Date.now() + res.longTime}
                                    renderer={renderer}
                                />
                                <button>Bid</button>
                            </div>                
                        </Grid>
                    )
                })} */}
            </Grid>
        </Container>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         lelang: state.Lelang
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         setProduct: (data) => {
//             dispatch(setProduct(data))
//         },
//         getProduct: () => {
//             dispatch(getProduct())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductLelang);
export default ProductLelang