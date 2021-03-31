import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachFileIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Database Design and Programming with SQL - Oracle Academy"  />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachFileIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Data Structures and Algorithms,Master the Coding Interview - Udemy"/>
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachFileIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="C for Everyone: Programming Fundamentals - Coursera"  />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AttachFileIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ECDL Profile Ceritificate"  />
      </ListItem>
    </List>
  );
}