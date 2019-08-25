import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Main from './main';
import About from './about';
import Topic from './topic';
import Nomatch from './nomatch';
export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:id" component={Topic}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route component={Nomatch}></Route>
                    </Switch>
                </Home>
            </HashRouter>
        )
    }
}