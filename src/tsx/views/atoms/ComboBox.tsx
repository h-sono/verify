import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export interface ComboBoxItem {
  id: string;
  value: string;
  selectedFlg? :boolean;
}

type Props = {
  inputLabel: string;
  items: ComboBoxItem[];
  defaultValue?: string;
  value?: string;
  onChange: (selected: string) => void;
};

export const ComboBox: React.FC<Props> = (props) => {
  const { 
    inputLabel, 
    items, 
    value = '', 
    defaultValue = '', 
    onChange 
  } = props;

  return (
    <FormControl style={{margin: '30px'}}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => {
          if (e.target.value !== undefined) {
            onChange(e.target.value as string);
          }
        }}
      >
        {
          items.map((item) => (
            <MenuItem 
              value={item.id} 
              key={item.id}
              selected={item.selectedFlg}
            >
              {item.value}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
