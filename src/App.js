
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
// import HomeContent from './pages/HomeContent.jsx';
// import Home from './pages/Home.jsx';
// import DespreContent from './pages/DespreContent.jsx';
// import Despre from './pages/Despre.jsx';
// import EducatieContent from './pages/DespreContent.jsx';
// import Educatie from './pages/Despre.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sticky from 'react-stickynode';
import HomeIcon from '@material-ui/icons/Home';
import Sidebar from './components/Sidebar.jsx';
import Avatar from '@material-ui/core/Avatar';
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
  },
}));



function App() {
  //const classes = useStyles();
  return (
    <div className="App">

{/* <Grid > */}
        {/* <Grid>
        <Row>
          <Col xs> */}
           <Avatar  />
          <Sidebar />
          {/* <Sticky>
            
            <Grid xs={4}  sm={2}>
            <Paper className={classes.paper}>
              <Scrollspy items={['section-1', 'section-2', 'section-3',
                'section-4', 'section-5', 'section-6', 'section-7', 'section-8']} currentClassName="is-current">

                <li><a href="#section-1">Home</a></li>
                <li><a href="#section-2">Despre</a></li>
                <li><a href="#section-3">Educatie</a></li>
                <li><a href="#section-4">Experienta profesionala</a></li>
                <li><a href="#section-5">Certificari</a></li>
                <li><a href="#section-6">Hard Skills</a></li>
                <li><a href="#section-7">Soft Skills</a></li>
                <li><a href="#section-7">Limbi straine</a></li>
                <li><a href="#section-7">Contact</a></li>
              </Scrollspy>
            </Paper>
            
            </Grid>
            </Sticky> */}
          {/* </Col> */}

          {/* <Col xs={{ order: 12 }} > */}

            {/* <Grid xs={4} sm={12}>
            <Paper className={classes.paper}>

              <section id="section-1">
                <Home />
                <HomeContent />
              </section>

              <section id="section-2">
                <Despre />
                <DespreContent />
              </section>

              <section id="section-3">
                <Educatie />
                <EducatieContent />
              </section>

            </Paper>
          {/* </Col> */}
          


          {/* </Grid> */}
        {/* </Row> */}
        {/* </Grid> */} 

      {/* </Grid> */}
    </div>
  );
}
export default App;