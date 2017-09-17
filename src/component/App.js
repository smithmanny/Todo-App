import React, { Component } from 'react';
import List from './List';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      items: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      input: '',
      items: [...this.state.items, this.state.input]
    });

  }

  render() {
    return (
      <div className="container center-align">
        <h2>My Todo List</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              id="input"
              placeholder="Add New Task"
              value={this.state.input}
              onChange={this.handleChange.bind(this)}
              type="text" />
            <small>Press enter to submit new task</small>
          </form>
          <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
