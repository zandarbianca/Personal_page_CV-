import React from 'react'
import { brown } from '@material-ui/core/colors';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


const Voluntariat = () => {
    return (
        <div>
            <Paper >
                <Box p={1}>
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
                </Box>
            </Paper>

        </div>
    )
}

export default Voluntariat
