import React, { Component } from "react";

import CCounter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {this.props.counters.map((counter) => (
                    <CCounter
                        key={counter.id}
                        onAdd={this.props.onAdd}
                        onDelete={this.props.onDelete}
                        counter={counter}
                    >
                        <h4>Counter #{counter.id}</h4>
                    </CCounter>
                ))}
            </div>
        );
    }
}

export default Counters;
