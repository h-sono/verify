import React from 'react';

export interface funcProps {
  addTodo(title: string): void
}

export class TodoInput extends React.Component<funcProps> {
  constructor(props: funcProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.addTodo('新規Todo');
  }
  render() {
    return (
      <div>
        <input placeholder='新規TODOを入力してください'></input>
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
};
