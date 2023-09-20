import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [entries, setEntries] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setEntries(event.target.value as string);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 100, borderRadius: '20px' }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">entries</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={entries}
        label="entries"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>5</MenuItem>
        <MenuItem value={20}>15</MenuItem>
        <MenuItem value={30}>25</MenuItem>
      </Select>
    </FormControl>
  );
}
