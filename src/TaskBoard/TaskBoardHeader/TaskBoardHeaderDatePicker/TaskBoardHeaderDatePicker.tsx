//import styles from './TaskBoardHeaderDatePicker.module.scss';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import styles from './TaskBoardHeaderDatePicker.module.scss';
export default function TaskBoardHeaderDatePicker() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      className={styles['date-picker']}
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      maw={400}
    />
  );
}
