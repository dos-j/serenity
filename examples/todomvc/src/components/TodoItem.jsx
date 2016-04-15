import React, { Component } from 'react';

export default class TodoItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      value,
      ref,
      onDelete
    } = this.props;

    return (
      <li>
        <span> {value} </span>
        <button onClick={onDelete}>X</button>
      </li>
    );
  }
}
