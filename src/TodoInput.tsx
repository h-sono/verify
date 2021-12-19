import React from 'react';

export interface Props {}
export interface State {}

class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <input placeholder='新規TODOを入力してください'></input>
        <button>登録</button>
      </div>
    );
  }
};

export default TodoInput;
