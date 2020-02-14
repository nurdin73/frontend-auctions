import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents, setAuction } from '../../_actions/lelang';

class AddAuction extends Component {
  constructor(props) {
    super(props);
    this.state = { 
				eventId: '',
				title: '',
				startingPrice: 0,
				bidAccumulation: 100000,
        fixPrice: 0,
				startTime: '',
				images: '',
				endTime: '',
				bidTimeAddition: ''
    };
  }
  handleChangeTitle = e => {
	  this.setState({title: e.target.value})
	//   console.log(this.state.title)
  }
  handleChangeStartPrice = e => {
      this.setState({startingPrice: e.target.value})
  }
  handleBidAcc = e => {
      this.setState({bidAccumulation: e.target.value})
  }
  handleFixPrice = e => {
      this.setState({fixPrice: e.target.value})
  }
  handleStartTime = e => {
      this.setState({startTime: e.target.value})
  }
  handleEndTime = e => {
      this.setState({endTime: e.target.value})
  }
  handleTime = e => {
      this.setState({bidTimeAddition: e.target.value})
  }
  handleEvent = e => {
      this.setState({eventId: e.target.value})
  }
  handleUpload = e => {
      const files = e.target.files[0]
      this.setState({images: files})
  }
	handleSubmit = e => {
		e.preventDefault()
		const { eventId, title, startingPrice, bidAccumulation, fixPrice, startTime, images, endTime, bidTimeAddition } = this.state
		const time = "00:"+ bidTimeAddition + ":00"
		const formData = new FormData()
		formData.append("eventId", eventId)
		formData.append("title", title)
		formData.append("startingPrice", startingPrice)
		formData.append("bidAccumulation", bidAccumulation)
		formData.append("fixPrice", fixPrice)
		formData.append("startTime", startTime)
		formData.append("endTime", endTime)
		formData.append("bidTimeAddition", time)
		formData.append("images", images)
		this.props.setAuction(formData)
		return <Redirect to={{pathname: `/`}} />
	}

	componentDidMount() {
		this.props.getEvents()
	}

  render() {
		const {events} = this.props.lelang
    return (
      <div>
        <Container maxWidth="sm">
					<fieldset style={{padding:20, marginBottom:30}}>
						<form encType="multipart/form-data" id="myForm" onSubmit={this.handleSubmit}>
							<select onChange={this.handleEvent}>
								<option value="">pilih</option>
								{events.length > 0 ? 
									events.map((res, i) => {
									 	return	<option key={i} value={res.id}>{res.title}</option>
									}) : ''
								}
							</select> <br />
							<input type="text" value={this.state.title} onChange={this.handleChangeTitle} /> <br />
							<input type="number" value={this.state.startingPrice} onChange={this.handleChangeStartPrice} /> <br />
							<input type="number" value={this.state.bidAccumulation} onChange={this.handleBidAcc} /> <br />
							<input type="number" value={this.state.fixPrice} onChange={this.handleFixPrice} /> <br />
							<input type="date" value={this.state.startTime} onChange={this.handleStartTime} /> <br />
							<input type="date" value={this.state.endTime} onChange={this.handleEndTime} /> <br />
							<input type="number" className="input-time" value={this.state.bidTimeAddition} onChange={this.handleTime} /> <br />
							<input type="file" placeholder="images" name="images" onChange={this.handleUpload} /> <br />
							<button type="submit">Add product</button>
						</form>
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
		getEvents: () => {
			dispatch(getEvents())
		},
		setAuction: (data) => {
			dispatch(setAuction(data))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAuction);