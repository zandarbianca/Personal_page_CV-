
// import './App.css';
// import { Typography } from '@material-ui/core';
// import { Timeline } from '@material-ui/lab';
// ///import StyledTreeItem from './components/meniu.jsx';
// import Particles from 'react-particles-js';
// import particlesConfig from './components/background.jsx';
// import Scrollspy from 'react-scrollspy'
// //import Scrollspy from './components/scroll.jsx'

// function App() {
//   return (
//   <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
//     {/* <Typography variant="h4" gutterBottom>  Bianca's app </Typography> */}

//       <div style={{ position: 'absolute'}}>
//         <Particles height="100vh" width="100vw" params={particlesConfig} />
//       </div>
//       <header className="App-header">
//         <p>
//           Doamne ajuta sa nu dea eroare
//         </p>
//       </header>

import './App.css';
import Scrollspy from 'react-scrollspy'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home.jsx';

import Despre from './pages/Despre.jsx';

import Educatie from './pages/Despre.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sticky from 'react-stickynode';
import HomeIcon from '@material-ui/icons/Home';
import Sidebar from './components/Sidebar.jsx';
import Avatar from '@material-ui/core/Avatar';
import Particles from 'react-particles-js';
import particlesConfig from './components/background.jsx';
import { yellow } from '@material-ui/core/colors';
import { brown } from '@material-ui/core/colors';
import Box from "@material-ui/core/Box";




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
  }
}));


function App() {
  const classes = useStyles();

  return (
    

    <div className="App">
     
   <Grid container spacing={24}>
        <Grid xs={2}>
          <Sticky>
            <Sidebar />
            </Sticky>
       </Grid>
      
      <Grid xs={9} >

       <div style={{ position: 'absolute'}}>
         <Particles height="100vh" width="100vw" params={particlesConfig}  />
       </div>
 
        <Paper className={classes.paper} >
        <Box p={1}>
         <div>
         <br></br>
         <br></br>
         {/* <img src={Bibs}></img> */}
         <br></br>
         <br></br>
         <Home />
         <br></br>
         <br></br>
         

          </div>
          </Box> </Paper>
        
         <Paper className={classes.paper}>
           
            <div> <Despre/> </div>
            </Paper>

         <Paper className={classes.paper}> <div> <Educatie /></div></Paper>

       
      </Grid>
      </Grid>
    </div>
  );
}
export default App;