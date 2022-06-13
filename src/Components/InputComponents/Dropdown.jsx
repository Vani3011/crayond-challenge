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
    <div class="dropdown">
  <button class="btn dropdown-toggle drp-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <span className='active-one'>Active</span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">In-Progress</a></li>
    <li><a class="dropdown-item" href="#">Active</a></li>
    <li><a class="dropdown-item" href="#">Completed</a></li>
  </ul>
</div>
    
  );
}
