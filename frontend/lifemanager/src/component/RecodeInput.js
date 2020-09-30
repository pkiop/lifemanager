import React, { Component } from 'react';

class RecodeInput extends Component {
  render() {
    return (
      <div>
        <input name="description" type="text" />
        <input name="startTime" type="time" />
        <input name="endTime" type="time" />
        <input name="category" type="text" />
        <input name="isImproveTime" type="text" />
      </div>
    );
  }
}

export default RecodeInput;