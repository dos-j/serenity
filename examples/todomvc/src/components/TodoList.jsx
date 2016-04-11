import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      model
    } = this.props;
    return (
      <ul>
        {
         model.data.items.map((item, idx) => {
           return <li key={'item' + idx}> {item} </li>;       
          })
        }
      </ul>
    );
  }
}

export default TodoList;

