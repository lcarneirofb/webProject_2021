import { Component } from "react";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


class Copyright extends Component {
    render() {
            return (
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                  PARTYMATCH
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
          
    }
}

export default Copyright
