import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    let date = new Date();
    this.state={
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds()
    };
  }

  componentDidMount(){
    setInterval(this.updateTime,1000);

  }

  updateTime = () => {
    let date = new Date();
    
    const addZero = n => n < 10 ? "0" + n  : n;
    
    this.setState({
      h: date.getHours(),
      m: addZero(date.getMinutes()),
      s: addZero(date.getSeconds())
    });
  }

  showTime = () => {
    return `${this.state.h}:${this.state.m}:${this.state.s}`;
  }

  render(){
    return(
      <div>
        {this.showTime()}
      </div>
    )
  }
}


export default App;