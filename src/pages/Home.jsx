
import { Typography } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Bibs from '../img.jpeg';
import React, { Component } from 'react'
import Typical from 'react-typical'
import { Class } from '@material-ui/icons';
import DownloadLink from "react-download-link";

const useStyles = makeStyles({
    custom: {
        color: "black",
        fontWeight: "bold"
    },
    pagina: {
        width: "max-width",
        backgroundImage: `url(${Bibs})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
});

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper spacing={0}
                align="center"
                justify="center"
                direction="column"
                lg='auto'
                className={classes.pagina}>
                <br></br><br></br><br></br><br></br>
                <Typography align='center' className={classes.custom} >
                    <h1> HI! I'M  </h1>
                    <h1> Zandăr Bianca</h1>
                    <InsertEmoticonIcon />
                </Typography>
                <Typography className={classes.custom} align='center'>
                    <Typical
                        steps={['I AM A STUDENT', 1000, 'I AM A VOLUNTEER', 500]}
                        loop={Infinity}
                        wrapper="p"
                    /></Typography>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            </Paper>
        </div>
    )
}

export default Home
