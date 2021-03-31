import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import CoursesSkills from './SkillsCourses.jsx';
import Tilt from 'react-parallax-tilt';
import GitAPI from '../pages/GitAPI.jsx'
import SkillsErasmus from '../pages/SkillsErasmus.jsx'
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
      <Grid container spacing={0}  style={{ gap: 70 }} justify="center">

        <Tilt item xs={12} sm={6} >
          <div style={{ height: '300px', backgroundColor: 'white',width:'600px' }}>
            <h1 align="center">Hard Skills</h1>
          </div>
        </Tilt>

        <Tilt item xs={12} sm={6}>
          <div style={{ height: '300px', backgroundColor: 'white',width:'600px' }}>
            <h1 align="center">Erasmus+</h1>
            <SkillsErasmus />
          </div>
        </Tilt>
 
        <Tilt item xs={12} sm={6} >
          <div style={{ height: '300px', backgroundColor: 'white',width:'600px'}}>
            <h2 align="center">Courses and Licenses</h2>
            <CoursesSkills />

          </div>
        </Tilt>

        <Tilt item xs={12} sm={6}>
          <div style={{ height: '300px', backgroundColor: 'white', width:'600px'}}>
              <GitAPI />
          </div>
        </Tilt>

      </Grid>

    </div>
  );
}

