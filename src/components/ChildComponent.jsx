import React, { Component } from "react";
import "../assets/ChildComponent.css";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editIndex: null,
      editText: "",
    };
  }

  handleEdit = (index) => {
    this.setState({ editIndex: index, editText: this.props.tasks[index] });
  };

  handleSave = () => {
    this.props.editTask(this.state.editIndex, this.state.editText);
    this.setState({ editIndex: null, editText: "" });
  };

  handleChange = (e) => {
    this.setState({ editText: e.target.value });
  };

  render() {
    return (
      <div className="child-container">
        {this.props.tasks.map((task, index) => (
          <div key={index} className="task">
            <div className="left">
              {this.state.editIndex === index ? (
                <input
                  type="text"
                  value={this.state.editText}
                  onChange={this.handleChange}
                />
              ) : (
                <span>{task}</span>
              )}
            </div>
            <div className="right">
              <button className="deletebtn" onClick={() => this.props.deleteTask(index)}>
                Delete
              </button>
              {this.state.editIndex === index ? (
                <button onClick={this.handleSave}>Save</button>
              ) : (
                <button onClick={() => this.handleEdit(index)}>Edit</button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ChildComponent;
