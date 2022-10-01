import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      title: "",
      body: "",
      limitChar: 20,
      disabled: false,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onAddEventHander = this.onAddEventHander.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
    this.setState({ limitChar: 20 - event.target.value.length });
    if (event.target.value.length > 20) {
      this.setState({ disabled: true });
    }
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onAddEventHander(event) {
    event.preventDefault();
    this.props.addTodo({ title: this.state.title, body: this.state.body });
  }

  render() {
    return (
      <form className="my-5 mx-auto" style={{ width: "800px" }} onSubmit={this.onAddEventHander}>
        <p>Character Title Left : {this.state.limitChar}</p>
        <div className="input-group mb-3">
          <span className="input-group-text">Input Todo Title</span>
          <input disabled={this.state.disabled} type="text" className="form-control" onChange={this.onTitleChangeHandler} />
          <span className="input-group-text">Input Todo Description</span>
          <textarea className="form-control" onChange={this.onBodyChangeHandler} />
        </div>
        <button type="submit" className="btn btn-outline-secondary my-3" style={{width : "800px"}}>
          Add
        </button>
      </form>
    );
  }
}

export default TodoInput;
