import React from "react";


export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.init
        };
    }

    incrementHandler = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

    decrementHandler = () => {
        this.setState({
            value: this.state.value - 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter logic</h1>
                <h3>counter: {this.state.value}</h3>
                <button onClick={this.incrementHandler}>increment</button>
                <br/><br/>
                <button onClick={this.decrementHandler}>decrement</button>
            </div>
        );
    }
}