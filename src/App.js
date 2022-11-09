import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Routes, Link, Redirect } from 'react-router-dom';
import Counter from "./components/counter";
import Counters from "./components/counters"; 
import Nav from './components/nav'
import userData from './components/userData';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return(
            <React.Fragment>
            <Nav /> 
            <Counters/>
            </React.Fragment>
        )
    }
}
export default App;