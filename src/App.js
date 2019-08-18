import React, { Component } from 'react';
// import { Router, Route, Link } from 'react-router';
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
// const { SubMenu } = Menu;
// const { Content, Sider } = Layout;

import Home from './home';

class App extends Component {
  	render() {
    	return (
      		<div className="App">
        		<Home/>
      		</div>
    	);
  	}
}

export default App;
