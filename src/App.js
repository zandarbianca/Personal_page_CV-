import './App.css';
import Scrollspy from 'react-scrollspy'


import { makeStyles } from '@material-ui/core/styles';

import Home from './pages/Home.jsx';

import Despre from './pages/Despre.jsx';
import Voluntariat from './pages/Voluntariat.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';

import Sticky from 'react-stickynode';

import Sidebar from './components/Sidebar.jsx';
import { Link, Element } from 'react-scroll'
import Particles from 'react-particles-js';
import particlesConfig from './components/background.jsx';


import { brown } from '@material-ui/core/colors';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Bibs from './c.jpeg';



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
    backgroundColor: '#7CB9DF',
    // backgroundImage: `url(${Bibs})`,
  }, pagina: {
    width: "max-width",
    backgroundImage: `url(${Bibs})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

}));


function App() {
  const classes = useStyles();

  return (


    <div className="App">
      <Paper className={classes.pagina}>
        <Grid container spacing={24}>
          <Grid xs={2}>
            <Sticky>
              <Sidebar />
            </Sticky>
          </Grid>

          <Grid xs={9} >

            {/* <div style={{ position: 'static' }}>
            <Particles height="100vh" width="100vw" params={particlesConfig} />
          </div> */}
            {/* <Paper className={classes.paper} >
              <Box p={1}>
                <div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Home />
                  <br></br>
                  <br></br>
                </div>
              </Box> </Paper> */}

            {/* <Paper className={classes.paper}>
              <div> <Despre /> </div>
            </Paper>

            <Paper className={classes.paper}>
              <div> <Voluntariat /> </div>
            </Paper>

            <Paper className={classes.paper}>
              <div> <Contact /> </div>
            </Paper>

            <Paper className={classes.paper}>
              <div> <Skills /> </div>
            </Paper> */}
            <Element name="test1" className="element">
              <Home />
            </Element>
            <Element name="test2" className="element">
              <Despre />
            </Element>
            <Element name="test3" className="element">
              <Voluntariat />
            </Element>
            <Element name="test4" className="element">
              <Skills />
            </Element>
            <Element name="test5" className="element">
              <Contact />
            </Element>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default App;