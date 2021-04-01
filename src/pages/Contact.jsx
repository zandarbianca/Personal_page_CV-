import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
            <br></br>
            <br></br>
            <br></br>
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


