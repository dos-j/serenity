import React from 'react';
import { TodoItem } from './index';


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
         model.items.map((item, idx) => {
           return <TodoItem key={'todoitem-' + idx} value={item} ref={idx} onDelete={this.onDelete.bind(this, idx)} />;       
          })
        }
      </ul>
    );
  }

  onDelete(idx) {
    this.props.deleteAction(idx);
  }
}

export default TodoList;

