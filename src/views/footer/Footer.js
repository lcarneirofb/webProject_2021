import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Copyright from '../copyright/Copyright.js'

        const useStyles = makeStyles((theme) => ({
            footer: {
                backgroundColor: theme.palette.background.paper,
                padding: theme.spacing(10),
              },
        }))
       
        

export default function Footer(){
    const classes = useStyles();
    
        return (
            <>
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
            </>
        )
    
}


