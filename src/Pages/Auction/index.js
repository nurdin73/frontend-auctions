import React, { Component } from 'react';
import { getAuction, setBid, Auto } from '../../_actions/lelang';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Grid, Typography, Slider, Snackbar } from '@material-ui/core';
import Countdown from 'react-countdown-now';
import { Alert } from '@material-ui/lab'
import AutoBid from '../../Components/AutoBid';
import './style.css'
class Auction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valuePrice: [0,2000],
        valueIn: [0, 30],
        open: true,
        open2: true,
        success: false,
        success2: false
    }
    setInterval(() => {
        this.props.getAuction(this.props.auctionId)
    }, 4000);
  }
  componentDidMount() {
      this.props.getAuction(this.props.auctionId)
  }

    handleBid = (auctionId, autoBid) => e => {
        e.preventDefault()
        const data = {
            auctionId: auctionId,
        }
        this.props.setBid(data)
        // console.log(setAuction)
        // if(setAuction.success === true || autoBid.success === true) {
            setTimeout(() => {
                const {setAuction, autoBid} = this.props.lelang
                this.setState({success: setAuction.success})
                this.setState({success2: autoBid.success})
                if(this.state.success === true) {
                    this.props.Auto(data)
                }
            }, 3000);
        // }
        this.setState({open: true})
        console.log(this.state.success)
    }

    
	
    valueText = (e, value) => {
        return `${value}`
    }

    handleChangePrice = (e, newValue) => {
        this.setState({valuePrice: newValue})
    }
    handleChangeIn = (e, newValue) => {
        this.setState({valueIn: newValue})
    }
    convertToRupiah(angka)
    {
        var rupiah = '';		
        var angkarev = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkarev.length; i++) if(i%3 === 0) rupiah += angkarev.substr(i,3)+'.';
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
    }

    handleClose = () => {
        this.setState({open: false, success: false})
        console.log(this.state.success, "ini success")
    }
    handleClose2 = () => {
        this.setState({open2: false, success2: false})
        console.log(this.state.success2, "ini success 2")
    }

  render() {
    
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
    const {auction, setAuction, autoBid} = this.props.lelang
    return (
      <div>
        <Container>
            {/* {setAuction.length === 0 ? '' : setAuction.success === true ? <Alert severity="success">{setAuction.message}</Alert> : <Alert severity="error">{setAuction.message}</Alert>} */}
            {setAuction.length === 0 ? '' : 
                setAuction.success === true ? 
                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                    <Alert onClose={this.handleClose} severity="success">
                        {setAuction.message}
                    </Alert>
                </Snackbar> :
                <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                    <Alert onClose={this.handleClose} severity="error">
                        {setAuction.message}
                    </Alert>
                </Snackbar>
            }
            {autoBid.length === 0 ? '' : 
                autoBid.success === true ? 
                <Snackbar open={this.state.open2} autoHideDuration={6000} onClose={this.handleClose2} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                    <Alert onClose={this.handleClose2} severity="success">
                        {autoBid.message}
                    </Alert>
                </Snackbar> :
                <Snackbar open={this.state.open2} autoHideDuration={6000} onClose={this.handleClose2} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}>
                    <Alert onClose={this.handleClose2} severity="error">
                        {autoBid.message}
                    </Alert>
                </Snackbar>
            }
            <div className="card">
						<div className="card-header">
							<Typography variant="h6" color="secondary">Search All Our Available Koi</Typography>
						</div>
						<div className="card-body">
							<Grid container spacing={3} style={{marginBottom:40}}>
								<Grid item xs={6} md={3}>
									<input type="text" className="form-input" placeholder="Search by title" />
									<select className="form-select" placeholder="Search by sex">
										<option value="">Search by breeder</option>
										<option>Koi</option>
										<option>Piranha</option>
									</select>
								</Grid>
								<Grid item xs={6} md={3}>
									<Slider 
										max={2000}
										step={100}
										value={this.state.valuePrice}
										onChange={this.handleChangePrice}
										valueLabelDisplay="auto"
										aria-labelledby="range-slider"
										getAriaValueText={this.valueText}
										style={{marginBottom: 26}}
									/>
									<select className="form-select" placeholder="Search by sex">
										<option value="">Search by variety</option>
										<option>Koi</option>
										<option>Piranha</option>
									</select>
								</Grid>
								<Grid item xs={6} md={3}>
									<Slider 
										value={this.state.valueIn}
										onChange={this.handleChangeIn}
										valueLabelDisplay="auto"
										aria-labelledby="range-slider"
										getAriaValueText={this.valueText}
										style={{marginBottom: 26}}
									/>
									<select className="form-select" placeholder="Search by sex">
										<option value="">Search by price type</option>
										<option>Koi</option>
										<option>Piranha</option>
									</select>
								</Grid>
								<Grid item xs={6} md={3}>
									<select className="form-select" placeholder="Search by sex">
										<option value="">Search by sex</option>
										<option>Jantan</option>
										<option>Betina</option>
									</select>
									<button>Filter</button>
								</Grid>
							</Grid>
						</div>
					</div>
            <Grid container spacing={4} style={{marginTop:20}}>
                {auction.length > 0 ? 
                    auction.map((res, i) => {
                        return (
                            <Grid item xs={3} key={i}>
                                <div className="card">
                                    <img src={`http://localhost:5000/images/${res.image}`} alt="" className="product-image" style={{height:'300px'}} />
                                    <Typography variant="h6">{res.title}</Typography>
                                    {res.latestBidPrice <= res.startingPrice ?
                                        <Typography variant="subtitle1" color="primary">Starting bid {this.convertToRupiah(res.startingPrice)}</Typography>
                                        :
                                        <Typography variant="subtitle1" color="primary">Current bid {this.convertToRupiah(res.latestBidPrice)}</Typography>
                                    }
                                    <Typography variant="subtitle2">Time left</Typography>
                                    <Countdown 
                                        date={Date.now() + (new Date(res.endTime).getTime() - Date.now())}
                                        renderer={renderer}
                                    />
                                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                                    <button className="btn-bid" onClick={this.handleBid(res.id, "")}>Bid</button>
                                    <AutoBid auctionId={res.id} bidAccumulation={res.bidAccumulation} startingPrice={res.startingPrice} />
                                    </div>
                                </div>                
                            </Grid>
                        )
                    })
                    : <Typography>{auction.message}</Typography>
                }
            </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auctionId: ownProps.match.params.id,
        lelang: state.Lelang
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAuction: (id) => {
            dispatch(getAuction(id))
        },
        setBid: (data) => {
            dispatch(setBid(data))
        },
        Auto: (data) => {
            dispatch(Auto(data))
        },
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Auction));