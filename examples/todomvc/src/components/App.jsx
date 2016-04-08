import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickEvent() {
    this.props.genericAction();
  }

  render() {

    return (
      <div>
        <h1 onClick={this.onClickEvent.bind(this)}> Hello, Serenity </h1>
      </div>
    );
  }
}

export default App;
