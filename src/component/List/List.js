import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor() {
    super();

    this.state = {
      done: false
    }
  }

  toggleClass() {
    this.setState({ done: !this.state.done })
  }

  render() {
    const { items } = this.props;
    
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className={this.state.done ? 'card finished' : 'card'} onClick={() => this.toggleClass()}>
              <h3>{item}</h3>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
