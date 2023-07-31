import { differenceInDays } from 'date-fns';
import { getWeeks } from './utils';

const expectContigousDays = month => {
  const firstDayOfCalendar = month[0][0].date;
  let i = 0;

  month.map(weeks =>
    // eslint-disable-next-line array-callback-return
    weeks.map(day => {
      expect(differenceInDays(day.date, firstDayOfCalendar)).toEqual(i);
      i++;
    })
  );
};

describe('getWeeks in a month', () => {
  test('given a month that spans 4 weeks', () => {
    const month = getWeeks(new Date(2015, 1, 1));
    expect(month).toHaveLength(4);
    expectContigousDays(month);
  });

  test('given a month that spans 5 weeks', () => {
    const month = getWeeks(new Date(2018, 9, 1));
    expect(month).toHaveLength(5);
    expectContigousDays(month);
  });

  test('given a month that spans 6 weeks', () => {
    const month = getWeeks(new Date(2018, 8, 1));
    expect(month).toHaveLength(6);
    expectContigousDays(month);
  });
});

describe('days in each week', () => {
  const numDays = ([name, date]: any) => {
    test(name, () => {
      const month = getWeeks(date);
      // eslint-disable-next-line array-callback-return
      month.map(week => {
        expect(week).toHaveLength(7);
      });
    });
  };

  [
    ['given a month that spans 4 weeks', new Date(2015, 1, 1)],
    ['given a month that spans 5 weeks', new Date(2018, 9, 1)],
    ['given a month that spans 6 weeks', new Date(2018, 8, 1)]
  ].forEach(numDays);
});
