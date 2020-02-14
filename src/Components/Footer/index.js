import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div style={{backgroundColor:'#e02c2c', padding:20}}>
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={6} md={4}>
                    asdasdasd
                </Grid>
                <Grid item xs={6} md={4}>
                    asdasdasd
                </Grid>
                <Grid item xs={12} md={4}>
                    asdasdasd
                </Grid>
            </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;