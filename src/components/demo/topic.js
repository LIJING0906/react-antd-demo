import React from 'react';

export default class Topic extends React.Component{
    render() {
        return (
            <div>
                This is Topic page.{this.props.match.params.id}
            </div>
        )
    }
}