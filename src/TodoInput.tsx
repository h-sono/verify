import React from 'react';

export interface funcProps {
  addTodo(title: string): void;
}

export interface inputValueState {
  inputValue: string;
}

export class TodoInput extends React.Component<funcProps, inputValueState> {
  constructor(props: funcProps) {
    super(props);
    this.state = {
      inputValue: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(){
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
  }
  handleChange(e: any){
    this.setState({
      inputValue: e.target.value,
    })
  }
  render() {
    return (
      <div className='TodoInput'>
        <input placeholder='新規TODO' value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
};
