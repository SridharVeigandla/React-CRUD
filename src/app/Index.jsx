import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Nav, Alert } from '@/_components';
import { Home } from '@/home';
import { Users } from '@/users';
import  About from '../home/About';
import Contact from '../home/Contatct';
import Add from '../home/add';
import Mull from '../home/Mull';

function App() {
    const { pathname } = useLocation();  

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/mull" component={Mull}/>

                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export { App }; 