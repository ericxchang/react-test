/* 
  @flow
*/

import React, { Component } from 'react';

type Props = {};
type State = {
    running: boolean,
    current: Date
};

export default class Clock extends Component<Props, State> {
    timerID: IntervalID;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            current: new Date(),
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
            current: new Date()
        });
    }

    render() {
        const {current, running} = this.state
        return (
            <div>
                <h2>{current.toLocaleTimeString()}.</h2>
                <button onClick={this.toggleRunning}>{running ? "Stop" : "Start"}</button>
                <button>Clear</button>
            </div>
        )
    }
}