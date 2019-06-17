import React from 'react';

export class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.setTimer();
    }

    componentUnMount() {
        this.clearInterval(this.timer);
    }

    render() {
        // console.log(this.state.date);
        return (
            <h4>{this.state.date}</h4>
        )
    }

    setTimer() {
        this.timer = setInterval(() => {
            this.setState((state, props) => {
                return {
                    date: new Date().toLocaleTimeString()
                }
            });
        }, 1000)
    }
}