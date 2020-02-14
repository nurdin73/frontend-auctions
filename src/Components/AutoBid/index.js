import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Slider, Button, DialogContentText } from '@material-ui/core';
import { connect } from 'react-redux';
import { setAutoBid, Auto } from '../../_actions/lelang';
class AutoBid extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, value: props.bidAccumulation };
  }

  valuetext(value) {
    return `${value}°C`;
  }

  handleClickOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleChange = (e, newValue) => {
    e.preventDefault()
    this.setState({value: newValue})
  }

  handleSubmit = (auctionId, autoBid) => e => {
    e.preventDefault()
    const data = {
      auctionId: auctionId,
      autoBidValueMax: autoBid
    }
    // console.log(data)
    this.props.setAutoBid(data)
    setTimeout(() => {
      const {autoBid} = this.props.lelang
      if(autoBid.success === true) {
        this.props.Auto(data)
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        <button className="btn-bid" onClick={this.handleClickOpen}>Auto Bid</button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          style={{padding:10}}
        >
          <DialogTitle id="responsive-dialog-title">Auto BID</DialogTitle>
          <DialogContent style={{width: 400}}>
            <DialogContentText>
              Maximum Bid At
              <div className="card" style={{marginBottom: 10, padding:5}}>
                {this.state.value}
              </div>
              <Slider
                min={this.props.bidAccumulation}
                max={this.props.startingPrice}
                step={this.props.bidAccumulation}
                onChange={this.handleChange}
                getAriaValueText={this.valuetext}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit(this.props.auctionId, this.state.value)} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
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
    setAutoBid: (data) => {
      dispatch(setAutoBid(data))
    },
    Auto: (data) => {
      dispatch(Auto(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutoBid);