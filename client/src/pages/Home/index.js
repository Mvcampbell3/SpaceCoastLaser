import React, { Component } from 'react';
import "./home.css"

class Home extends Component {
  state = {

  }
  render() {
    return (
      <div className="background">
        <div className="container">
          <h1 className="mainTitle">Space Coast Laser INC</h1>
          <h3 className="mainSub">World Wide Sales and Service of New and Refurbished Laser Systems</h3>
        </div>
      </div>
    );
  }
}

export default Home;