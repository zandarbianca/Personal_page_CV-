import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));

  export default function FullWidthGrid() {

    const classes = useStyles();

    return (
      <div >
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>

            <Card>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
            </Card>

          </Paper>


          

        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              
          <Card>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
         Proiect Erasmus+ -  "Cariera Europeana in IT"
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        În cadrul proiectului, am lucrat în poziția de technical assistant,
în compania e-sistemas.net din Granada, Spania, în urma căreia
am realizat un site împreuna cu o colegă de echipă, într-un timp
destul de scurt, iar la final am primit un employment reference
din partea companiei.
Cu ajutorul proiectului, mi-am dezvoltat nenumărate abilități
cum ar fi: munca în echipă, realizarea task-urile până la un
deadline stabilit, asimilarea rapidă a cunoștințelor, abilitățile de
leadership și totodată limba engleză.

        </Typography>
            </Card>

              
            </Paper>
        </Grid>


        <Grid item xs={12} sm={6}>
       

          <Paper className={classes.paper}>
         
          <Card>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
        Database Design and Programming with SQL - Oracle Academy
        Data Structures and Algorithms,Master the Coding Interview -
Udemy
      C for Everyone: Programming Fundamentals - Coursera
2019 - ECDL Profile Ceritificate


        </Typography>
        
            </Card>
              
              </Paper>
        </Grid>
            </Grid>
       
      </div>
    );
  }

