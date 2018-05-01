import React, { Component } from 'react';
import UserRow from './UserRow';

class UserTable extends Component {

  render() {
    const filterText = this.props.filterText;
    const rows = [];

    this.props.users.forEach((user) => {
      if ((user.name.indexOf(filterText)=== -1) && (user.city.indexOf(filterText)=== -1) ) {
        return;
      }
      rows.push(
        <UserRow
          user={user}
          key={user.name}
        />
      );
    });
    return (
      <table className="table table-hover info">
        <thead>
          <tr className="info">
            <th>Name</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

}

export default UserTable;
