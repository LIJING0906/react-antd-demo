import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
    render() {
        return (
            <div>
                This is Main page.
                <br />
                <Link to="/main/topic1">嵌套topic1</Link>
                <br />
                <Link to="/main/topic2">嵌套topic2</Link>
                {this.props.children}
            </div>
        )
    }
}