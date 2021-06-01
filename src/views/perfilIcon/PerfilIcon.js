import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
      }
}));

export default function PerfilIcon(){
    const classes = useStyles();
    return(
        <Link color="inherit" href="/perfil">
             <AccountCircleIcon className={classes.icon} />
        </Link>
    )

}

