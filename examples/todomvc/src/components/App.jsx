import React from 'react';

import { TodoList } from './index';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    };
  }

  onClickEvent() {

    this.props.genericAction(this.state.inputValue);
  }

  onChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClickEvent.bind(this)}>Serenity TodoList</h1>
        <label>Add Todo</label>
        <input value={this.state.inputValue} onChange={this.onChange.bind(this)} />
        <button type="button" onClick={this.onClickEvent.bind(this)}>Add</button>
        
        <TodoList />
      </div>
    );
  }
}

export default App;
