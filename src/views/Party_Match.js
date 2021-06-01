import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import findingPlayerImage from '../../src/views/images/finding-player.jpeg'
import findingTeamImage from '../../src/views/images/finding-team.jpg';
import './Party_Match.css'
import Footer from '../../src/views/footer/Footer.js'
import Topbar from '../../src/views/topbar/Topbar.js'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  findingPlayer: {
    backgroundImage: `url(${findingPlayerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'Cover',
    backgroundPosition: 'center',
  },
  findingTeam: {
    backgroundImage: `url(${findingTeamImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <main>
        <Container className={classes.cardGrid} maxWidth="">
          {/* End hero unit */}
          <Grid justify='space-evenly' container spacing={0} >
              <Grid align='center' item  xs={12} sm={6} md={0}>
                  <findingPlayer className={classes.findingPlayer}>Encontre Um Jogador</findingPlayer>
              </Grid>
              <Grid align='center' item  xs={12} sm={6} md={0}>
                  <findingTeam className={classes.findingTeam}>Encontre Uma Equipe</findingTeam>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}