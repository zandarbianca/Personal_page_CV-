import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

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
            </form>
        );
    }
}

FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilledTextFields);
