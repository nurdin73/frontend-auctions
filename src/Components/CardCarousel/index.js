import React, { Component } from 'react';
import 'react-multi-carousel/lib/styles.css'
import './style.css'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';
class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    const renderer = ({days, hours, minutes, seconds, completed}) => {
        if(completed) {
            return <Typography>Waktu sudah selesai</Typography>
        } else {
            return (
                <Typography>Time Left : {days} day, {hours} : {minutes} : {seconds} </Typography>
            )
        }
    }
    // const longTime = () => {
    //   const date = new Date(this.props.startTime)
    //   let startTime = date.getTime()
    //   const date2 = new Date(this.props.endTime)
    //   let endTime = date2.getTime()
    //   return endTime - startTime
    // }
    
    return (
      <div>
        <Card style={{marginRight:20, position:'relative'}}>
            <span className="status">On going</span>
            {/* <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    R
                </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            /> */}
            <CardActionArea>
                <CardMedia
                component="img"
                alt={this.props.title}
                height="140"
                image={this.props.image}
                title={this.props.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Countdown 
                      date={Date.now() + (new Date(this.props.endTime).getTime() - Date.now())}
                      renderer={renderer}
                    />
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/event/${this.props.id}/auctions`} >
                  <Button size="small" color="primary">
                  Learn More
                  </Button>
                </Link>
            </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardCarousel;