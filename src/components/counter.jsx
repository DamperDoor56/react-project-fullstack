import React, {Component} from 'react';

class Counter extends Component{
    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200'
    };
    render(){
        return (
            <React.Fragment>
                <img src={ this.state.imgUrl } alt="" />
                <span className='badge badge-warning m-2'>{ this.counter() }</span>
                <button className='btn btn-primary'>Increment</button>
            </React.Fragment>
        )
    }

    counter(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Counter;