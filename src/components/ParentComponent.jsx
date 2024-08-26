import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import '../assets/ParentComponent.css';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  componentDidMount() {
    console.log('ParentComponent mounted');
  }

  componentDidUpdate() {
    console.log('ParentComponent updated');
  }

  componentWillUnmount() {
    console.log('ParentComponent will unmount');
  }

  handleAddTask = () => {
    if (this.state.newTask.trim()) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: ''
      }));
    }
  };

  handleDeleteTask = (index) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter((_, i) => i !== index)
    }));
  };

  handleEditTask = (index, newTask) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index] = newTask;
    this.setState({ tasks: updatedTasks });
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    return (
      <div className="parent-container">
        <h1>TODO LIST</h1>
        <hr></hr>
        <input 
          type="text" 
          value={this.state.newTask} 
          onChange={this.handleChange} 
          placeholder="add item..." 
        />
        <br />
        
        <button onClick={this.handleAddTask}
        className='parent'
        >ADD</button>
       
        <ChildComponent 
          tasks={this.state.tasks} 
          deleteTask={this.handleDeleteTask} 
          editTask={this.handleEditTask} 
        />
      </div>
    );
  }
}

export default ParentComponent;
