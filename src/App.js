import logo from "./logo.svg";

import { Component } from "react";

import CCounters from "./comps/counters";
import NavBar from "./comps/navbar";

import "./App.css";
import Counters from "./comps/counters";
import React from "react";

// function App() {
class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 2 },
            { id: 4, value: 3 },
        ],
    };

    handleAdd = (counter) => {
        console.log("counterId:", counter.id);
        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        // console.log("handleDelete called!", counterId);
        const counters = this.state.counters.filter((c) => c.id != counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onAdd={this.handleAdd}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>

            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <p>
            //             Edit <code>src/App.js</code> and save to reload.
            //         </p>
            //         <a
            //             className="App-link"
            //             href="https://reactjs.org"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             Learn React
            //         </a>
            //     </header>
            // </div>
        );
    }
}

export default App;
