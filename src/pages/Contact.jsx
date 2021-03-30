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
        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column">
            <Paper >


                <Link href="https://www.linkedin.com/in/bianca-zand%C4%83r/" >
                    <Button
                        variant="contained"
                        color="white"
                        className={classes.button}
                        startIcon={<LinkedInIcon color="primary" style={{ fontSize: 40 }} />}>
                    </Button>
                </Link>
                <Link href="https://github.com/zandarbianca" >
                    <Button
                        variant="contained"
                        color="white"
                        className={classes.button}
                        startIcon={<GitHubIcon style={{ fontSize: 40 }} />}>
                    </Button>
                </Link>
                <Link href="https://www.facebook.com/zandarbianca.22/" >
                    <Button
                        variant="contained"
                        color="white"
                        className={classes.button}
                        startIcon={<FacebookIcon color="primary" style={{ fontSize: 40 }} />}>
                    </Button>
                </Link>
                <Link href="https://www.instagram.com/bianca.gabriela/" >
                    <Button
                        variant="contained"
                        color="white"
                        className={classes.button}
                        startIcon={<InstagramIcon color="secondary" style={{ fontSize: 40 }} />}>
                    </Button>
                </Link>


            </Paper>
        </Grid>
        <br></br>
    </Grid>
    )
}

export default Contact


