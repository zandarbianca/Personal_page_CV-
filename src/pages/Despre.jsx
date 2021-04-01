import { Card, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import { brown } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Particles from 'react-particles-js';
import particlesConfig from '../components/background.jsx';
import Bibs from '../c.jpeg';
import '../App.css';
import Img from '../imgSkill.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),

    },
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        backgroundColor: brown[900],

    },
    title: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: '30%',
        fontFamily: 'MMA Champ',
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
const Despre = () => {
    const classes = useStyles();
    return (
        <div>
            <br></br><br></br>
            <Grid container spacing={3}>
                
                <Grid item xs={6} ><br></br>
                <div style={{ position: 'absolute' }}>
            <Particles height="100vh" width="70vw" params={particlesConfig} />
          </div>
                    <Paper className={classes.pagina}>
                        <Typography variant="h3" align="center">
                            <h6>Despre Mine</h6>
                        </Typography>
                        <br></br>
                        <Typography align="center">
                            <h3> Sunt o persoană deschisă, asimilez lucrurile foarte repede și consider că acest lucru reprezintă atuul meu. Îmi place să lucrez în echipă, să
                            comunic și să ajut persoanele din jurul meu. Lucrez eficient sub presiune, dar prefer să îmi termin munca mai devreme de termenul
                            stabilit. Îmi doresc ca pe viitor să lucrez în domeniul IT, să învăț și să descopăr cât mai multe lucruri din acest domeniu pentru a găsi ceea ce
                        mi se potrivește pe deplin.</h3>
                        </Typography>
                        
                        <br></br>
                        <br></br>
                        <Grid item >
                            <Timeline className="timeline">
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <br></br>
                                        <TimelineDot />
                                        <TimelineConnector />

                                    </TimelineSeparator>
                                    <TimelineContent >
                                        <h3> Academia de Studii Economice din București</h3>
                                        <h5> Facultatea de Cibernetică, Statistică și Informatică
                                                  Economică, specializarea Informatică Economică</h5>
                                    </TimelineContent>
                                </TimelineItem>

                                <TimelineItem>
                                    <TimelineSeparator>

                                        <br></br>
                                        <TimelineDot />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <h3> Colegiul Național "Anastasescu", Roșiori de Vede, Teleorman</h3>
                                        <h5>Profil Matematică - Infomatică</h5>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>
                    </Paper>



                </Grid>
                <Grid item xs={6} >
                    <br></br>
                    <Paper className={classes.pagina}>
                        <Typography variant="h3" align="center">
                            <h6 > Voluntariat </h6>
                        </Typography>

                        <Typography align="center">
                            <h3>
                                 Fundraiser în cadrul SiSC - Sindicatul Studenților din Cibernetică </h3>
                        </Typography>
                        <br></br>
                        <Typography align="center">
<br></br>
<h3> Am participat la organizarea mai multor proiecte în care mi-am
                            dezvoltat foarte multe dintre soft skill-uri, cum ar fi:
                            adaptabilitatea, munca în echipă, comunicarea eficientă,
                            managementul timpului, creativitatea și multe altele.
                            Proiectele în care m-am implicat sunt: Tutoring iarnă 2019, Tap
                            That Job 2020, Ghidul Ciberbobocului&StudenCSIE 2020, ITFest
                            2020; majoritatea acestora axându-se pe interacțiunea
                            studenților cu companii din domeniul IT.
                            Fiecare proiect a avut o influență pozitivă asupra mea, în timpul
                            acestora am primit și oferit feedback în foarte multe situații,
                            feedback care s-a dovedit a fi constructiv, atât pentru mine, cât
                            și pentru colegii mei.</h3>
    </Typography>
   

                        <br></br>
                        <br></br>
<br></br>
<br></br>
<br></br>
<br></br>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Despre
