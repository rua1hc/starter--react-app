import React, { Component } from "react";

import CCounter from "./counter";

class Counters extends Component {
    render() {
        const { onReset, onDelete, onAdd, counters } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <CCounter
                        key={counter.id}
                        onAdd={onAdd}
                        onDelete={onDelete}
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
