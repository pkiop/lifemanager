import React, { Component } from 'react';

class CentorClock extends Component {


  constructor(props) {
    super();
    const tdate = new Date();
    this.timeSet = false;
    this.state = {
      hour: this.addZeroForTime(tdate.getHours()),
      min: this.addZeroForTime(tdate.getMinutes()),
      sec: this.addZeroForTime(tdate.getSeconds())
    }
  }

  componentDidMount() {
    if(this.timeSet === false) {
      this.timerOn();
      this.timeSet = true;
    }
  }

  timerOn = () => {
    this.timerInterval = setInterval(() => {
      this.secIncrease();
    }, 1000);
  }

  addZeroForTime = (time) => {
    time = parseInt(time)
    if(time < 10) {
      return '0' + String(time);
    }
    return String(time);
  }

  secIncrease = () => {
    let sec = parseInt(this.state.sec);
    let min = parseInt(this.state.min);
    let hour = parseInt(this.state.hour);

    sec = sec + 1;
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
    if(min === 60) {
      min = 0;
      hour = hour + 1;
    }
    if(hour === 24) {
      hour = 0;
    }

    sec = this.addZeroForTime(sec);
    min = this.addZeroForTime(min);
    hour = this.addZeroForTime(hour);
   
    this.setState({
      hour: hour,
      min: min,
      sec: sec
    })
  }

  render() {
    return (
      <div className="MainHeaderBar-CentorClock">
        {this.state.hour}:{this.state.min}:{this.state.sec}
      </div>
    );
  }
}

export default CentorClock;