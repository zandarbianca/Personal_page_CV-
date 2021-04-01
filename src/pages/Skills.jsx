import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import CoursesSkills from './SkillsCourses.jsx';
import Tilt from 'react-parallax-tilt';
import GitAPI from '../pages/GitAPI.jsx';
import SkillsErasmus from '../pages/SkillsErasmus.jsx';
import Particles from 'react-particles-js';
import particlesConfig from '../components/background.jsx';
import Img from '../imgSkill.jpg';
import SkillsHard from '../pages/SkillsHard.jsx'
import { Typography } from '@material-ui/core';
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
  pagina:{
    width: "max-width",
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
display: "flex",
flexDirection: "column",
justifyContent: "center",
  },
}));

export default function FullWidthGrid() {

  const classes = useStyles();

  return (
    <div >
      <br></br><br></br><br></br><br></br>
      <Grid container style={{ gap: 70 }} justify="center">
      <div style={{ position: 'absolute' }}>
            <Particles height="100vh" width="70vw" params={particlesConfig} />
          </div>
        <Tilt item xs={12} sm={6} >
          <div style={{ height: '300px', backgroundColor: 'white',width:'600px' }}>
          <h2 align="center">Skills</h2>
            <SkillsHard />
          </div>
        </Tilt>
        <Tilt item xs={12} sm={6}>
          <div style={{ height: '300px', backgroundColor: 'white',width:'600px' }}>
            <h2 align="center">Erasmus+</h2>
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
            <br></br>
            <h2 align="center"> GitHub Repository</h2>
              <GitAPI />
          </div>
        </Tilt>
      </Grid>
    </div>
  );
}

