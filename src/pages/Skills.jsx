import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();

  return (
    <div >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={0} style={{ gap: 90 }} justify="center">

        <Tilt item xs={12} sm={6} >
          <div style={{ height: '300px', backgroundColor: 'white' }}>
            <h1>Erasmus+  -  "Cariera Europeana in IT"</h1>
          </div>
        </Tilt>

        <Tilt item xs={12} sm={6}>
          <div style={{ height: '300px', backgroundColor: 'white' }}>
            <h1>Proi Erasmus+  -  "Cariera Europeana in IT"</h1>
          </div>
        </Tilt>
 
        <Tilt item xs={12} sm={6} >
          <div style={{ height: '300px', backgroundColor: 'white' }}>
            <h1>Erasmus+  -  "Cariera Europeana in IT"</h1>
          </div>
        </Tilt>
        <Tilt item xs={12} sm={6}>
          <div style={{ height: '300px', backgroundColor: 'white' }}>
            <h1>Proi Erasmus+  -  "Cariera Europeana in IT"</h1>
          </div>
        </Tilt>
        <Grid item xs={12}>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Card>
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
        </Grid> */}



        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Card>
              <Typography variant="h5" component="h2">
                Database Design and Programming with SQL - Oracle Academy
                Data Structures and Algorithms,Master the Coding Interview -
                Udemy
                C for Everyone: Programming Fundamentals - Coursera
                2019 - ECDL Profile Ceritificate
        </Typography>
            </Card>
          </Paper>
        </Grid> */}
      </Grid>

    </div>
  );
}

