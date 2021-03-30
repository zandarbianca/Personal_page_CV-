import React from 'react'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ReactRoundedImage from "react-rounded-image";
import Box from "@material-ui/core/Box";
import Particles from 'react-particles-js';
import particlesConfig from '../components/background.jsx';
import Bibs from '../img.jpeg';
const useStyles = makeStyles({
    custom: {
        color: "#EDE5A6",
        fontWeight: "bold"
    },
    pagina:{
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
            {/* <Grid container wrap="nowrap" spacing={2} > */}
                <Paper spacing={0} 
                    align="center"
                    justify="center"
                    direction="column"
                    lg='auto'
                    className={classes.pagina}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <Typography align='center' className={classes.custom} >
                        <h1 color='black'> HI! I'M Bianca </h1>
                        <InsertEmoticonIcon />
                    </Typography> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </Paper>
            {/* </Grid> */}
        </div>
    )
}

export default Home
