import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    
    };
    console.log('run constructor');
  }
  render (){
    const { timer}=this.state;
    return (
        <div>{timer}</div>

    );
  }
    componentDidMount = () => {
        console.log('run componentDidMount');
        this.intervalId = setInterval(() => {
          this.setState({ timer: this.state.timer + 1 });
        }, 1000);
      };
  }

  export default Counter;