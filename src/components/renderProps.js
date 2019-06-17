
/**
 * Technique for sharing code between React components 
 * using a prop whose value is a function
 * Usage: <DataProvider render={data => (<h1>Hello {data.target})}
 * Libraries using it: ReactRouter, Downshift
 */

import React from 'react';

export class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{height: '100%', border: '1px solid black'}} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around</h1>
                <p> The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        )
    }
}