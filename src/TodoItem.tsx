import React from 'react';

export interface itemProps {
    id: number;
    title: string;
};

const TodoItem: React.FC<itemProps> = (itemProps) => {
  const { title } = itemProps;
  return (
    <li>
      {title}
    </li>
  )
};

export default TodoItem;
