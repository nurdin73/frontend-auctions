import React, { Component } from 'react';
import Carousel from 'nuka-carousel'
import './banner.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNews } from '../../_actions/lelang';

class CustomSlider extends Component {

  componentDidMount() {
    this.props.getNews()
  }

  render() {
    const {news} = this.props.lelang
    console.log(news)
    return (
      <div>
      <Carousel autoplay={true} withoutControls={false} wrapAround={true} height={250} autoplayInterval={3000} style={{marginBottom: 10}}>
            {news.length > 0 ? 
              news.map(res => {
                return(
                  <Link to="/">
                    <img src={res.image} alt={res.title} />
                  </Link>
                )
              }) : news.message
            }
        </Carousel>
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
    getNews: () => {
      dispatch(getNews())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomSlider)
// export default CustomSlider