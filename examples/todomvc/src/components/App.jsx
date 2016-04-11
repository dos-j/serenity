import React from 'react';

import { TodoList } from './index';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickEvent() {
    this.props.genericAction('test');
  }

  render() {
    return (
      <div>
        <h1 onClick={this.onClickEvent.bind(this)}>Serenity TodoList</h1>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
