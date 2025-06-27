import React, { Component } from "react";

class DigitalClock extends Component {
    // constructor - to set the initial state
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    } 

    // componentDidMount
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000)
    }

    // componentWillUnmount
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    // render method
    render() {
        return (
            <div>
                <h1>🕐 Digital Clock</h1>
                <h2>City: {this.props.city}</h2>
                <h3>Current Time: {this.state.time}</h3>
            </div>
        )
    }
}

export default DigitalClock;