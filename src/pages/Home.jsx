import React from 'react'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { makeStyles } from '@material-ui/core/styles';
import Bibs from '../Bibs.jpg';
import ReactRoundedImage from "react-rounded-image";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
    custom: {
        color: "#EDE5A6",
        fontWeight: "bold"
    }
});



const Home = () => {
    const classes = useStyles();

    return (
        <div>
            {/* <Typography align='center'> Home </Typography> */}

            <Grid container wrap="nowrap" spacing={2} >
                <Grid item xs={12} spacing={0}
    align="center"
    justify="center"
    direction="column">
                    <div>
                    {/* <Box mx="auto" bgcolor="background.paper" p={2}> */}
                            <ReactRoundedImage
                                image={Bibs}
                                roundedColor="#321124"
                                imageWidth="380"
                                imageHeight="300"
                                roundedSize="13"
                                alignItems="center"></ReactRoundedImage>
                                 {/* </Box> */}

                   </div>
                   <br></br>
         <br></br>
         <br></br>
         <br></br>
                    <Typography align='center' className={classes.custom} >
                        <h1 color='white'> HI! I'M Bianca </h1>
                        <InsertEmoticonIcon />
                    </Typography>
                    <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
      
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
