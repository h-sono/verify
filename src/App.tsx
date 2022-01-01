import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { itemProps } from './TodoItem';

export interface state {
  tasks: Array<itemProps>;
  uniqueId: number;
}

export class App extends React.Component<{},state> {
  // 試験的にstateを変更
  constructor (props: any) {
    super (props);
    this.state = {
      tasks: [
        {
          title: 'デフォルトTODO',
          id: 0
        }
      ],
      uniqueId: 1
    };
    // addTodoメソッドが常にAppコンポーネントのstateを参照できるようthisをbindする。
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  // 登録用
  addTodo(title: string) {
    const {
      tasks,
      uniqueId,
    } = this.state

    tasks.push({
      title,
      id: uniqueId,
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });
  }

  // 登録項目リセット用
  resetTodo(){
    this.setState({
      tasks: [],
    })
  }

  render() {
    return (
      <div>
        <h1>TODO APP</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
};
