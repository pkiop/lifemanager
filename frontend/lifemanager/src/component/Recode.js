import React, { Component } from 'react';

class Recode extends Component {
  render() {
    console.log("Recode data : ", this.props.info);
    return (
      <div>
        {JSON.stringify(this.props.info)}  
      </div>
    );
  }
}

export default Recode;