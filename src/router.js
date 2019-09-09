import React from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './home';
import Nomatch from './components/demo/nomatch';
import Welcome from './components/welcome';
import GoalNode from './components/pages/goalNode/goalNode';
import NodeList from './components/pages/goalNode/iplist';
import ServerManage from './components/pages/serverManage/serverManage';
import SapiManage from './components/pages/serverManage/apiManage';
import addEditServer from './components/pages/serverManage/addEditServer';
import Safety from './components/pages/safety';
import Consumer from './components/pages/consumer';
import Audit from './components/pages/audit';
import Manage from './components/pages/manage';
export default class IRouter extends React.Component{
    render() {
        return (
            <HashRouter history={hashHistory}>
                <Home>
                    <Switch>
                        <Route exact path="/" component={Welcome}></Route>
                        <Route path="/goalnode" component={GoalNode}></Route>
                        <Route exact path="/nodeDetail/:nodekey" component={NodeList}></Route>
                        <Route path="/serverManage" component={ServerManage}></Route>
                        <Route exact path="/sApiManage/:serverkey" component={SapiManage}></Route>
                        <Route exact path="/addEditServer/:type" component={addEditServer}></Route>
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