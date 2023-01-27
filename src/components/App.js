import React, { Component } from "react";

import '../styles/App.scss';
import Search from "./Search/Search";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1>Выбери свой город</h1>
                <Search/>
            </div>
        );
    }
}

export default App;