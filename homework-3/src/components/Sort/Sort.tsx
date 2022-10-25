import { useState, FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './Sort.module.scss';

// interface SortProps {
//   store?: {};
//   updateStore?: (val) => void;
// }

// OR

interface SortProps {
  selected?: {};
  updateSelected?: (val: string) => void;
}

// OR store can be global

export const Sort: FC<SortProps> = ({ updateSelected }) => {
  const handleChange = (value: string) => {
    updateSelected(value);
  };

  return (
    <FormControl className={styles.control} component="fieldset">
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label="sorting"
        name="radio-buttons-group"
        onChange={e => handleChange(e.target.value)}
      >
        <FormControlLabel value="desc" control={<Radio />} label="desc" />
        <FormControlLabel value="asc" control={<Radio />} label="asc" />
      </RadioGroup>
    </FormControl>
  );
};
