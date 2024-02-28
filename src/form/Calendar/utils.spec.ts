import { differenceInDays } from 'date-fns';
import {
  getDayAttributes,
  getDayLabels,
  getWeeks,
  isNextWeekEmpty,
  isPreviousWeekEmpty
} from './utils';

describe('getDayLabels', () => {
  test('should return english labels by default', () => {
    const labels = getDayLabels();

    expect(labels).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });

  test('should return correct labels given a language', () => {
    const labels = getDayLabels('fr');

    expect(labels).toEqual([
      'dim.',
      'lun.',
      'mar.',
      'mer.',
      'jeu.',
      'ven.',
      'sam.'
    ]);
  });

  test('should return correct labels given a locale', () => {
    const labels = getDayLabels('de-DE');

    expect(labels).toEqual(['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']);
  });
});

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

describe('getDayAttributes', () => {
  test('should return correct attributes when not a range and current is valid', () => {
    const day = new Date(2022, 0, 1);
    const current = new Date(2022, 0, 1);
    const hover = new Date(2022, 0, 2);
    const isRange = false;

    const attributes = getDayAttributes(day, current, hover, isRange);

    expect(attributes.isActive).toBe(true);
    expect(attributes.isRangeStart).toBe(false);
    expect(attributes.isRangeEnd).toBe(false);
  });

  test('should return correct attributes when selection has not started', () => {
    const day = new Date(2022, 0, 1);
    const current = undefined;
    const hover = new Date(2022, 0, 1);
    const isRange = true;

    const attributes = getDayAttributes(day, current, hover, isRange);

    expect(attributes.isActive).toBe(true);
    expect(attributes.isRangeStart).toBe(true);
    expect(attributes.isRangeEnd).toBe(true);
  });

  test('should return correct attributes when a range has been selected', () => {
    const day = new Date(2022, 0, 1);
    const current: [Date, Date] = [new Date(2022, 0, 1), new Date(2022, 0, 3)];
    const hover = new Date(2022, 0, 2);
    const isRange = true;

    const attributes = getDayAttributes(day, current, hover, isRange);

    expect(attributes.isActive).toBe(true);
    expect(attributes.isRangeStart).toBe(true);
    expect(attributes.isRangeEnd).toBe(false);
  });

  test('should return correct attributes when in the process of selecting a range', () => {
    const day = new Date(2022, 0, 1);
    const current: [Date, undefined] = [new Date(2022, 0, 1), undefined];
    const hover = new Date(2022, 0, 2);
    const isRange = true;

    const attributes = getDayAttributes(day, current, hover, isRange);

    expect(attributes.isActive).toBe(true);
    expect(attributes.isRangeStart).toBe(true);
    expect(attributes.isRangeEnd).toBe(false);
  });
});

describe('isNextWeekEmpty', () => {
  test('should return false when next week is in range and within the same month', () => {
    const day = new Date(2024, 1, 15);
    const range: [Date, Date] = [new Date(2024, 1, 15), new Date(2024, 1, 24)];
    const hideNextMonth = true;

    const result = isNextWeekEmpty(day, range, hideNextMonth);

    expect(result).toBe(false);
  });

  test('should return false when next week is in range but in the next month, and next month days are visible', () => {
    const day = new Date(2024, 1, 24);
    const range: [Date, Date] = [new Date(2024, 1, 24), new Date(2024, 2, 2)];
    const hideNextMonth = false;

    const result = isNextWeekEmpty(day, range, hideNextMonth);

    expect(result).toBe(false);
  });

  test('should return true when next week is in range but in the next month, and next month days are hidden', () => {
    const day = new Date(2024, 1, 24);
    const range: [Date, Date] = [new Date(2024, 1, 24), new Date(2024, 2, 2)];
    const hideNextMonth = true;

    const result = isNextWeekEmpty(day, range, hideNextMonth);

    expect(result).toBe(true);
  });

  test('should return true when next week is not in range', () => {
    const day = new Date(2024, 1, 24);
    const range: [Date, Date] = [new Date(2024, 1, 24), new Date(2024, 2, 1)];
    const hideNextMonth = true;

    const result = isNextWeekEmpty(day, range, hideNextMonth);

    expect(result).toBe(true);
  });
});

describe('isPreviousWeekEmpty', () => {
  test('should return false when previous week is in range and within the same month', () => {
    const day = new Date(2024, 2, 8);
    const range: [Date, Date] = [new Date(2024, 2, 1), new Date(2024, 2, 8)];
    const hidePrevMonth = true;

    const result = isPreviousWeekEmpty(day, range, hidePrevMonth);

    expect(result).toBe(false);
  });

  test('should false true when previous week is in range but in the previous month, and previous month days are visible', () => {
    const day = new Date(2024, 2, 7);
    const range: [Date, Date] = [new Date(2024, 1, 29), new Date(2024, 2, 7)];
    const hidePrevMonth = false;

    const result = isPreviousWeekEmpty(day, range, hidePrevMonth);

    expect(result).toBe(false);
  });

  test('should return true when previous week is in range but in the previous month, and previous month days are hidden', () => {
    const day = new Date(2024, 2, 7);
    const range: [Date, Date] = [new Date(2024, 1, 29), new Date(2024, 2, 7)];
    const hidePrevMonth = true;

    const result = isPreviousWeekEmpty(day, range, hidePrevMonth);

    expect(result).toBe(true);
  });

  test('should return true when previous week is not in range', () => {
    const day = new Date(2024, 2, 7);
    const range: [Date, Date] = [new Date(2024, 2, 5), new Date(2024, 2, 7)];
    const hidePrevMonth = true;

    const result = isPreviousWeekEmpty(day, range, hidePrevMonth);

    expect(result).toBe(true);
  });
});
