import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export interface SelectBoxSelectedItem {
  id: string;
  value: string;
  selectedFlg?: boolean;
}

type Props = {
  inputLabel: string;
  items: SelectBoxSelectedItem[];
};

export const SelectBoxSelected: React.FC<Props> = (props) => {
  const { 
    inputLabel, 
    items, 
  } = props;

  let selectedVal = '';
  items.map((item) =>{
    if (item.selectedFlg) {
      selectedVal = item.value;
    };
  });

  const [value, setValue] = React.useState(selectedVal);

  return (
    <FormControl style={{margin: '50px'}}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        value={value}
        onChange={(e) => {
          setValue(e.target.value as string);
        }}
      >
        {
          items.map((item) => (
            <MenuItem
              value={item.value}
              key={item.id}
            >
              {item.value}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};
