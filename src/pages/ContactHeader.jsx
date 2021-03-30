import React from 'react'
import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon} <MailIcon />
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}<div>Contact</div></Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}<div> - GET IN TOUCH - </div></Typography>
                </div>
            </div>
        </Paper>
    )
}