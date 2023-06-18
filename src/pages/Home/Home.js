import React, { Component, Fragment } from 'react';
import Navbar from '../NavBar/Navbar';
import Profile from '../Profile/Profile';

/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Profile />
      </Fragment>
    );
  }
}

export default Home;
