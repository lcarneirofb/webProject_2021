import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Cadastro_SCR from './views/Cadastro';
import Home_SCR from './views/Home';
import Login_SCR from './views/Login';
import Party_Match_SRC from './views/Party_Match';


const Root = () => {
    return(

        <Router>
            <Switch>
                <Route path="/" exact component={Login_SCR}/>
                <Route path="/cadastro" component={Cadastro_SCR}/>
                <Route path="/home" component={Home_SCR}/>
                <Route path="/party_Match" component={Party_Match_SRC}/>
            </Switch>
        </Router>
    
    )
}

export default Root;