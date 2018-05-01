import React, { Component } from 'react';
import UserTable from './UserTable';
import SearchBar from './SearchBar';

class FilterableUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
      <SearchBar
        filterText={this.state.filterText}
        onFilterTextChange={this.handleFilterTextChange}
      />
      <UserTable
        users={this.props.users}
        filterText={this.state.filterText}
      />
      </div>
    );
  }

}

export default FilterableUserInfo;
