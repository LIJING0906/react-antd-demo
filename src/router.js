import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Nomatch from './components/demo/nomatch';
import Welcome from './components/welcome';
import GoalNode from './components/pages/goalNode';
import ServerManage from './components/pages/serverManage';
import Safety from './components/pages/safety';
import Consumer from './components/pages/consumer';
import Audit from './components/pages/audit';
import Manage from './components/pages/manage';
export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route exact path="/" component={Welcome}></Route>
                        <Route path="/goalnode" component={GoalNode}></Route>
                        <Route path="/serverManage" component={ServerManage}></Route>
                        <Route path="/safety" component={Safety}></Route>
                        <Route path="/consumer" component={Consumer}></Route>
                        <Route path="/audit" component={Audit}></Route>
                        <Route path="/manage" component={Manage}></Route>
                        <Route component={Nomatch}></Route>
                    </Switch>
                </Home>
            </HashRouter>
        )
    }
}