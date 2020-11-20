import React, { Component } from 'react';

class RecodeInput extends Component {
  render() {
    return (
      <div className="RecodeInput">
        <input className="RecodeInput-description" name="description" placeholder="description" type="text" />
        <div className="RecodeInput-time">
          <input name="startTime" type="time" />
          <input name="endTime" type="time" />
        </div>
        <div className="RecodeInput-select">
          <select name="category">
            <option>deveplop</option>
            <option>reading</option>
            <option>nap</option>
            <option>exercise</option>
          </select>
          <select name="isImproveTime">
            <option>true</option>
            <option>false</option>
          </select>
          <button>submit</button>
        </div>
      </div>
    );
  }
}

export default RecodeInput;
