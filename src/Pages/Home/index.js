import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core'
import {} from '@material-ui/icons'

import './style.css';
import Banner from '../../Components/Banner';
import Slider from '../../Components/Carousel';
import CardCarousel from '../../Components/CardCarousel';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Product from '../../Components/Product';
import { connect } from 'react-redux';
import { getEvents } from '../../_actions/lelang';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const {events} = this.props.lelang
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    
    return (
      
      <div>
        <Container>
          <Grid container spacing={1} style={{marginBottom:20}}>
            <Grid item md={8}>
              <Banner height={250} btnVisible={true} />
            </Grid>
            <Grid item md={4}>
              <Slider />
              <Slider />
            </Grid>
          </Grid>
          <div className="card">
            <div className="card-header">
              <Typography variant="h4">Auction</Typography>
              <Link to="/">See More..</Link>
            </div>
            <div className="card-body">
              <Carousel responsive={responsive}>
                {events.length > 0 ?
                  events.map((res, i) => {
                    return <CardCarousel key={i} id={res.id} title={res.title} startTime={res.startTime} endTime={res.endTime} image={res.image} description={res.description} />
                  })
                  : ''
                }
              </Carousel>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <Typography variant="h4">Shop</Typography>
              <Link to="/">See More..</Link>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
              <Grid item xs={6} md={3}>
                <Product />
              </Grid>
            </Grid>
          </div>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);