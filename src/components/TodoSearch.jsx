import React from "react";

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchFilled = this.onSearchFilled.bind(this);
  }

  onSearchFilled(event) {
    this.props.searchEngine(event.target.value);
  }

  render() {
    return (
      <form className='d-flex" role="search'>
        <input className="form-control me-2" placeholder="Search todo" onChange={this.onSearchFilled} />
      </form>
    );
  }
}

export default TodoSearch;
