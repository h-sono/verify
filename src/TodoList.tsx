import React from 'react';
import TodoItem, { itemProps } from './TodoItem';

export interface tasks {
  tasks: Array<itemProps>
}

class TodoList extends React.Component<tasks> {
  render() {
    const { tasks } = this.props;
    const list = tasks.map(todo => {
      return <TodoItem {...todo} key={todo.id} />
    });

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
};

export default TodoList;
