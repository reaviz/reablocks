import { DateFormat } from '../../data/DateFormat';
import { Stack } from '../../layout/Stack';
import { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Components/Form/Date Input',
  component: DateInput
};

export const Simple = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Stack direction="column">
      <DateFormat date={date} format="MM/dd/yyyy" />
      <DateInput value={date} onChange={setDate} />
    </Stack>
  );
};

export const Error = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <DateInput error value={date} onChange={setDate} />;
};

export const Disabled = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <DateInput disabled value={date} onChange={setDate} />;
};

export const CustomIcon = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <DateInput
      value={date}
      onChange={setDate}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.75 5.75C12.5785 5.75 13.25 6.4215 13.25 7.25V11.5C13.25 12.3272 12.5772 13 11.75 13H4.25C3.42275 13 2.75 12.3272 2.75 11.5V7.25C2.75 6.4215 3.4215 5.75 4.25 5.75H11.75ZM5.5 11.25V10.75C5.5 10.612 5.388 10.5 5.25 10.5H4.75C4.612 10.5 4.5 10.612 4.5 10.75V11.25C4.5 11.388 4.612 11.5 4.75 11.5H5.25C5.388 11.5 5.5 11.388 5.5 11.25ZM5.5 9.5V9C5.5 8.862 5.388 8.75 5.25 8.75H4.75C4.612 8.75 4.5 8.862 4.5 9V9.5C4.5 9.638 4.612 9.75 4.75 9.75H5.25C5.388 9.75 5.5 9.638 5.5 9.5ZM7.5 11.25V10.75C7.5 10.612 7.388 10.5 7.25 10.5H6.75C6.612 10.5 6.5 10.612 6.5 10.75V11.25C6.5 11.388 6.612 11.5 6.75 11.5H7.25C7.388 11.5 7.5 11.388 7.5 11.25ZM7.5 9.5V9C7.5 8.862 7.388 8.75 7.25 8.75H6.75C6.612 8.75 6.5 8.862 6.5 9V9.5C6.5 9.638 6.612 9.75 6.75 9.75H7.25C7.388 9.75 7.5 9.638 7.5 9.5ZM7.5 7.75V7.25C7.5 7.112 7.388 7 7.25 7H6.75C6.612 7 6.5 7.112 6.5 7.25V7.75C6.5 7.888 6.612 8 6.75 8H7.25C7.388 8 7.5 7.888 7.5 7.75ZM9.5 11.25V10.75C9.5 10.612 9.388 10.5 9.25 10.5H8.75C8.612 10.5 8.5 10.612 8.5 10.75V11.25C8.5 11.388 8.612 11.5 8.75 11.5H9.25C9.388 11.5 9.5 11.388 9.5 11.25ZM9.5 9.5V9C9.5 8.862 9.388 8.75 9.25 8.75H8.75C8.612 8.75 8.5 8.862 8.5 9V9.5C8.5 9.638 8.612 9.75 8.75 9.75H9.25C9.388 9.75 9.5 9.638 9.5 9.5ZM9.5 7.75V7.25C9.5 7.112 9.388 7 9.25 7H8.75C8.612 7 8.5 7.112 8.5 7.25V7.75C8.5 7.888 8.612 8 8.75 8H9.25C9.388 8 9.5 7.888 9.5 7.75ZM11.5 9.5V9C11.5 8.862 11.388 8.75 11.25 8.75H10.75C10.612 8.75 10.5 8.862 10.5 9V9.5C10.5 9.638 10.612 9.75 10.75 9.75H11.25C11.388 9.75 11.5 9.638 11.5 9.5ZM11.5 7.75V7.25C11.5 7.112 11.388 7 11.25 7H10.75C10.612 7 10.5 7.112 10.5 7.25V7.75C10.5 7.888 10.612 8 10.75 8H11.25C11.388 8 11.5 7.888 11.5 7.75ZM4.25 5C3.673 5 3.14825 5.219 2.75 5.57625V4.5C2.75 3.67275 3.42275 3 4.25 3H11.75C12.5772 3 13.25 3.67275 13.25 4.5V5.57625C12.8518 5.219 12.327 5 11.75 5H4.25Z"
            fill="currentColor"
          />
        </svg>
      }
    />
  );
};

export const Range = () => {
  const [date, setDate] = useState<[Date, Date]>([new Date(), new Date()]);

  return (
    <Stack className="w-[300px]" direction="column">
      <Stack>
        <DateFormat date={date[0]} format="MM/dd/yyyy" /> -{' '}
        <DateFormat date={date[1]} format="MM/dd/yyyy" />
      </Stack>
      <DateInput
        fullWidth
        isRange
        value={date}
        onChange={(value: [Date, Date]) => setDate(value)}
      />
    </Stack>
  );
};

export const OpenOnFocus = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <DateInput fullWidth openOnFocus value={date} onChange={setDate} />;
};
