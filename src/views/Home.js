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
import ppartyImage from '../../src/views/images/gaming-party-bus.jpg'
import ccomunityImage from '../../src/views/images/gaming-comunity.jpg';
import './Home.css'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PARTYMATCH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
  partyImage: {
    backgroundImage: `url(${ppartyImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  comunityImage: {
    backgroundImage: `url(${ccomunityImage})`,
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
      <AppBar position="relative">
        <Toolbar>
          <AccountCircleIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            PARTYMATCH
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              PARTYMATCH
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Junte-se a outros jogadores, encontre companheiros para jogar
              com voce ou junte-se a comunidade do seu jogo favorito
              e discuta com outros jogadores
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="">
          {/* End hero unit */}
          <Grid justify='space-evenly' container spacing={4} >
              <Grid align='center' item  xs={12} sm={6} md={4}>
                <partyImage className={classes.partyImage}>
                    <Link href="/party_Match" color="inherit" >
                     PARTYMATCH
                    </Link>
                </partyImage>
              </Grid>
              <Grid align='center' item  xs={12} sm={6} md={4}>
                  <comunityImage className={classes.comunityImage}>Comunidades</comunityImage>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          PARTYMATCH
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Jogue Junto!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}