import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from "@material-ui/core/Box";
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class FilledTextFields extends React.Component {
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="filled-name"
                    label="Name"
                    className={classes.textField}
                    type="name"
                    name="name"
                    fullWidth
                    autoComplete="name"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="filled"
                />
                <TextField
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows="8"
                    fullWidth
                    className={classes.textField}
                    margin="normal"
                    variant="filled"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon>send</SendIcon>}>
                    Send
                </Button>
                <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column">
            <Paper spacing={3} >


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
            </form>
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
