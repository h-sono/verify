import React from 'react';

export interface itemProps {
    title: string;
    id: number;
};

export const TodoItem: React.FC<itemProps> = (itemProps) => {
  const { title } = itemProps;
  return (
    <li>
      {title}
    </li>
  )
};
