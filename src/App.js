import React, { Component } from "react";
import Counters from "./components/counters";
import Nav from './components/nav'
class App extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return(
            <React.Fragment>
                <Nav/>
                <Counters />
            </React.Fragment>
        )
    }
}
export default App;