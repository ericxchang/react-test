import React, { Component } from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            running: false,
        }
    }

    toggleRunning = () => {
        const {running} = this.state
        // stop clock
        if (running) {
            clearInterval(this.timerID)
        } else {
            this.startTImer()
        }
        this.setState({running: !this.state.running})

    }

    componentDidMount() {
        //this.toggleRunning();
    }

    startTImer() {
        this.timerID = setInterval(
            () => this.tick(),
            1
        );
    }

    // to prevent memory leak
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date, running} = this.state
        return (
            <div>
                <h2>{date.toLocaleTimeString()}.</h2>
                <button onClick={this.toggleRunning}>{running ? "Stop" : "Start"}</button>
                <button>Clear</button>
            </div>
        )
    }
}