import React, { Component } from 'react';
import List from './component/List/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
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
      <div className="wrapper">
        <h2>My Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="input"
            placeholder="Add New Task"
            value={this.state.input}
            onChange={this.handleChange}
            type="text"
          />
        </form>
        {
          this.state.items >= 0 && 'Enter a task'
        }
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
