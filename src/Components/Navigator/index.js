import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Avatar, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navigator(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const link = [
      {
          title: 'My Profile',
          link: '/profile'
      },
      {
          title: 'My Auction',
          link: '/my-auction'
      },
      {
          title: 'Add Auction',
          link: '/add-auction'
      },
      {
          title: 'List My Bid',
          link: '/bid-auction'
      },
      {
          title: 'Product',
          link: '/product'
      },
      {
          title: 'My Cart',
          link: '/my-chart'
      },
      {
          title: 'Logout',
          link: '/logout'
      },
  ]

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div style={{ display: "flex", padding: "15px", alignItems: "center" }}>
        <Avatar>{props.initial}</Avatar>
        <div style={{ marginLeft: "10px" }}>
          <Typography variant="body1">{props.name}</Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ fontWeight: "bold" }}
          >
            {props.email}
          </Typography>
        </div>
      </div>
      <List>
        {link.map((text, index) => (
            <Link key={index} to={text.link} 
            style={{
                textDecoration: "none",
                fontWeight: "bold",
                textTransform: "capitalized",
                color: "#35424a"
            }}>
                <ListItem button>
                    <ListItemText primary={text.title} />
                </ListItem>
            </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><Avatar>{props.initial}</Avatar></Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}