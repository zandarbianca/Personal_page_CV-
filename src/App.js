import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from './pages/Home.jsx';
import Despre from './pages/Despre.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';
import Sticky from 'react-stickynode';
import Sidebar from './components/Sidebar.jsx';
import { Element } from 'react-scroll'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Bibs from './img.jpeg';

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
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Paper className={classes.pagina}>
        <Grid container spacing={24}>
          <Grid xs={2}>
            <Sticky>
              <Sidebar />
            </Sticky>
          </Grid>
          <Grid xs={9} >
            <Element name="test1" className="element">
              <Home />
            </Element>
            <Element name="test2" className="element">
             <br></br>
              <Despre />
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
    </div></ThemeProvider>
  );
}
export default App;