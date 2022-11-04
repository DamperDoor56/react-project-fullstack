import React, {Component} from 'react';

class Counter extends Component{
    state = { //Counter value
        count: this.props.value,
        tags: []
    };

    //Constructor
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //     console.log('juju', this);
    // }

    //Render tags if
    RenderTags(){
        if(this.state.tags.length === 0) return 'there are no tags'; // if there are no tags, display message
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> //if there are tags display tags
    }

    handleIncrement(arg){ //Increase counter onclick
        console.log('Increment click', this);
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render(){
        console.log('props', this.props);
        return (
            <React.Fragment>
                { this.props.children } @  { this.props.CounId }
                <span style={{
                    fontSize: 30
                }} className={this.GetClass()}>{ this.counter() }</span>

                <button onClick={() => { this.handleIncrement({id:1}) }} className='btn btn-primary'>Increment</button>
                
                { this.state.tags.length === 0 ? <p>they are no tags</p> :
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> 
                }
                {/* <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul> */}
            </React.Fragment>
        )
    }

    GetClass() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    counter(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;