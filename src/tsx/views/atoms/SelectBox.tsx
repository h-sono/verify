import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export interface SelectBoxItem {
  id: string;
  value: string;
}

type Props = {
  inputLabel: string;
  items: SelectBoxItem[];
  defaultValue?: string;
  selectedFlg: boolean;
};

export const SelectBox: React.FC<Props> = (props) => {
  const { 
    inputLabel, 
    items, 
    defaultValue = '', 
    selectedFlg = false,
  } = props;

  // 1つの項目をselected　かつ　readOnlyにしたいとき用
  let selectedVal = '';
  if (selectedFlg) {
    items.map((item) =>{
      selectedVal = item.value;
    });
  };

  const [value, setValue] = React.useState(selectedFlg? selectedVal : defaultValue);

  return (
    <FormControl style={{margin: '50px'}}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        defaultValue={defaultValue}
        // disabled={selectedFlg}
        readOnly={selectedFlg}
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
