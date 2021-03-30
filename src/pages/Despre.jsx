import { Typography } from '@material-ui/core';
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
    
}));
const Despre = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
            {/* <div style={{ position: 'absolute' }}>
            <Particles height="100vh" width="100vw" params={particlesConfig} />
          </div> */}
                <Grid item xs={6}>
                           
                        <Typography variant="h3" align="left">
                            <h3>Despre Mine</h3>
                        </Typography>
                        <br></br>
                        <h3> Sunt o persoană deschisă, asimilez lucrurile foarte repede și consider că acest lucru reprezintă atuul meu. Îmi place să lucrez în echipă, să
                        comunic și să ajut persoanele din jurul meu. Lucrez eficient sub presiune, dar prefer să îmi termin munca mai devreme de termenul
                        stabilit. Îmi doresc ca pe viitor să lucrez în domeniul IT, să învăț și să descopăr cât mai multe lucruri din acest domeniu pentru a găsi ceea ce
                        mi se potrivește pe deplin.</h3>
                        <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item >
                                <Timeline >
                                    <TimelineItem >
                                        <TimelineSeparator>
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
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <h3> Colegiul Național "Anastasescu", Roșiori de Vede, Teleorman</h3>
                                            <h5>Profil Matematică - Infomatică</h5>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Grid>
                        </Grid>

                    </Paper>
                
                </Grid>
                <Grid item xs={6}>
                    
                <Typography variant="h5">

Fundraiser în cadrul SiSC - Sindicatul Studenților din
Cibernetică (2019 - prezent)
</Typography>
<br></br>
<br></br>
<Typography variant="h5" align="left">
Am participat la organizarea mai multor proiecte în care mi-am
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
și pentru colegii mei.
<br></br>
<br></br>
</Typography>


                </Grid>
            </Grid>
        </div>
    )
}

export default Despre
