import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ContactForm from '../pages/ContactForm.jsx'
import ContactHeader from '../pages/ContactHeader.jsx'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    
}));
const useStyles2 = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))



const Contact = () => {
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
    <Grid>
        <Grid item xs={12}>
            <Paper className={classes2.pageContent}>
                <ContactHeader />
                <ContactForm />
               <br></br>
            </Paper>
        </Grid>
        
        <br></br>
    </Grid>
    )
}

export default Contact


