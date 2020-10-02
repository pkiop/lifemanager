import React, { Component } from 'react';
import RecodeUnit from './RecodeUnit';

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
  },
  {
    description: "Zero to one",
    startTime: "13:20",
    endTime: "15:50",
    category: "reading",
    isImproveTime: true,
  },
  {
    description: "just nap",
    startTime: "15:20",
    endTime: "16:10",
    category: "nap",
    isImproveTime: false,
  } 
]
class RecodeList extends Component {
  id= 0;

  render() {
    const list = testData.map(el => {
      console.log(el);
      return (
        <RecodeUnit
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