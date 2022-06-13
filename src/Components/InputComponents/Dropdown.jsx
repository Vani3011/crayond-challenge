import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Dropdown.scss"
export default function DropDown() {
  const [Active, setActive] = React.useState('');

  const handleChange = (event) => {
    setActive(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Active</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={Active}
        label="Active"
        onChange={handleChange}
        className="customized-style"
      >
        <MenuItem value="Active">
          Active
        </MenuItem>
        <MenuItem value="InProgress">InProgress</MenuItem>
        <MenuItem value="To Do">To Do</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    </FormControl>
  );
}
