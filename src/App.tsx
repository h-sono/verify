import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component {
  render() {
    // TODO: 後程state管理
    const tasks = [
      { id: 1, title: 'ToDo1つ目' },
      { id: 2, title: 'ToDo2つ目' },
    ];
    return (
      <div>
        <h1>TODO APP</h1>
        <TodoInput />
        <TodoList tasks={tasks} />
      </div>
    );
  }
};

export default App;
