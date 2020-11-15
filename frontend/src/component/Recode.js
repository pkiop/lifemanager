import React, { Component } from 'react';
import RecodeInput from './Recode/RecodeInput';
import RecodeList from './Recode/RecodeList';
import './Recode.scss';

class Recode extends Component {
  render() {
    console.log("Recode data : ", this.props.info);
    return (
      <div className="Recode">
        <RecodeInput></RecodeInput>
        <RecodeList></RecodeList>
      </div>
    );
  }
}

export default Recode;