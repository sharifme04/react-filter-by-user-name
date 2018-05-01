import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <form className="form-group row">
         <div className="col-xs-4 col-xs-offset-4">
          <input
            className="form-control text-center"
            type="text"
            placeholder="Search by users name"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;
