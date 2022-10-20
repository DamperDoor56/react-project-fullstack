import React, {Component} from 'react';

class Counter extends Component{
    state = { //Counter state
        count: 100,
        imgUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };
    //Render tags if
    RenderTags(){
        if(this.state.tags.length === 0) return 'there are no tags'; // if there are no tags, display message
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> //if there are tags display tags
    }

    handleIncrement(){ //Increase counter onclick
        console.log('Increment click')
    }
    render(){
        return (
            <React.Fragment>
                <img src={ this.state.imgUrl } alt="" />
                <span style={{
                    fontSize: 30
                }} className={this.GetClass()}>{ this.counter() }</span>
                <button onClick={this.handleIncrement()} className='btn btn-primary'>Increment</button>
                { this.RenderTags() }
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