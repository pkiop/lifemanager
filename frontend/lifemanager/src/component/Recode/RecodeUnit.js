import React, { Component } from 'react';


/* 
"description":"라매개발1","startTime":"20:20","endTime":"20:50","category":"develop","isImproveTime":true}
*/
class RecodeUnit extends Component {
  render() {
    const {description, startTime, endTime, category, isImproveTime} = this.props.info;
    return (
      <div className="RecodeUnit">
        <input className="RecodeUnit-description" name="description" value={description} placeholder="description" type="text" />
        <div className="RecodeUnit-time">
          <input name="startTime" value={startTime} type="time" />
          <input name="endTime" value={endTime} type="time" />
        </div>
        <div className="RecodeUnit-select">
          <select name="category" value={category}>
            <option>deveplop</option>
            <option>reading</option>
            <option>nap</option>
            <option>exercise</option>
          </select>
          <select name="isImproveTime" value={isImproveTime}>
            <option>true</option>
            <option>false</option>
          </select>
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default RecodeUnit;