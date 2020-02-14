import React, { Component } from 'react';
import { Typography, Grid, Container, Slider } from '@material-ui/core';
import './style.css'
class Lelang extends Component {
  constructor(props) {
    super(props);
    this.state = { 
			valuePrice: [0,2000],
			valueIn: [0, 30]	
		};
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

  render() {
    return (
      <div>
        <Container>
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
				</Container>
      </div>
    );
  }
}

export default Lelang;