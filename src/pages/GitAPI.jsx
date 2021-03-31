import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function GitHubUser() {
    const userName = 'zandarbianca';
    const [repos, setRepos] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        fetch('https://api.github.com/users/' + userName + '/repos?sort=created')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, [userName]);

    const listItems = repos.map((repo) =>
        <Fragment>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={repo.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary">
                            </Typography>
                            {repo.description}
                        </React.Fragment>} />
                </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>
    );

    return (
        <Fragment>
<br></br>

            <ListItemAvatar align="center">
                <Avatar style={{ width: 80, height: 80 }} />
            </ListItemAvatar>
            <br></br>
            <Typography variant="body1" align="center" >
                GitHub Repository
            </Typography>

            <List className={classes.root}>{listItems}</List>

            <Link href="https://github.com/zandarbianca/pagina_personala" >
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ display: 'flex', justifyContent: 'right' }}
                    endIcon={<ArrowForwardIcon>Go to read</ArrowForwardIcon>}>
                    Go to read
            </Button>
            </Link>

        </Fragment>
    );
}

                {/* <ListItemAvatar>
                    <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
                </ListItemAvatar> */}