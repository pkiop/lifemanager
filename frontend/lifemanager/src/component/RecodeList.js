import React, { Component } from 'react';
import Recode from './Recode';

const testData = [
  {
    description: "라매개발1",
    startTime: "20:20",
    endTime: "20:50",
    category: "develop",
    isImproveTime: true,
  },
  {
    description: "라매개발2",
    startTime: "11:20",
    endTime: "11:50",
    category: "develop",
    isImproveTime: true,
  }
]
class RecodeList extends Component {
  id= 0;

  render() {
    const list = testData.map(el => {
      return (
        <Recode
          info = {el}
          key = {this.id++}
        />
      )
    })
    
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default RecodeList;