import React, { Component } from 'react';
import './App.css';
import FilterableUserInfo from './components/FiterableUserInfo';
import Userinfo from './components/User.json';

const USERINFO = Userinfo;

class App extends Component {
  render() {
    return (
      <div className="Container">
        <FilterableUserInfo users={USERINFO} />
      </div>
    );
  }
}

export default App;
