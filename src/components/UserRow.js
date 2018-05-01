import React, { Component } from 'react';

class UserRow extends Component {

  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.gender}</td>
        <td>{user.salary}</td>
        <td>{user.city}</td>
      </tr>
    );
  }

}

export default UserRow;
