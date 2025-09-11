import { differenceInDays } from 'date-fns';
import { describe, test, expect } from 'vitest';
import { vi } from 'vitest';

import {
  getDayAttributes,
  getDayLabels,
  getWeeks,
  isNextWeekEmpty,
  isPreviousWeekEmpty,
  updateDateTime,
  isPresetActive,
  getMonthNames
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

describe('updateDateTime', () => {
  test('returns newDate as-is if it already has a time (single date)', () => {
    const currentDate = new Date(2024, 2, 7, 10, 30, 15);
    const newDate = new Date(2024, 2, 8, 12, 45, 30);
    const result = updateDateTime(currentDate, newDate, false, false);

    expect(result).toEqual(newDate);
  });

  test('inherits time from currentDate if newDate has no time (single date)', () => {
    const currentDate = new Date(2024, 2, 7, 10, 30, 15);
    const newDate = new Date(2024, 2, 8, 0, 0, 0);
    const result = updateDateTime(currentDate, newDate, false, false);

    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(15);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(8);
  });

  test('returns newDate as-is if it already has a time (range)', () => {
    const currentDate: [Date, Date] = [
      new Date(2024, 2, 7, 10, 30, 15),
      new Date(2024, 2, 8, 11, 0, 0)
    ];
    const newDate = new Date(2024, 2, 9, 14, 20, 10);
    const result = updateDateTime(currentDate, newDate, true, false);

    expect(result).toEqual(newDate);
  });

  test('inherits time from first date in currentDate if newDate has no time (range, rangeStart=false)', () => {
    const currentDate: [Date, Date] = [
      new Date(2024, 2, 7, 10, 30, 15),
      new Date(2024, 2, 8, 11, 0, 0)
    ];
    const newDate = new Date(2024, 2, 9, 0, 0, 0);
    const result = updateDateTime(currentDate, newDate, true, false);

    expect(result.getHours()).toBe(10);
    expect(result.getMinutes()).toBe(30);
    expect(result.getSeconds()).toBe(15);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(9);
  });

  test('resets time to 00:00:00 if newDate has no time (range, rangeStart=true)', () => {
    const currentDate: [Date, Date] = [
      new Date(2024, 2, 7, 10, 30, 15),
      new Date(2024, 2, 8, 11, 0, 0)
    ];
    const newDate = new Date(2024, 2, 9, 0, 0, 0);
    const result = updateDateTime(currentDate, newDate, true, true);

    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(9);
  });

  test('returns newDate as-is if currentDate is undefined', () => {
    const currentDate = undefined;
    const newDate = new Date(2024, 2, 9, 0, 0, 0);
    const result = updateDateTime(currentDate as any, newDate, false, false);

    expect(result).toEqual(newDate);
  });

  test('handles currentDate as array with undefined first element', () => {
    const currentDate: [Date | undefined, Date | undefined] = [
      undefined,
      undefined
    ];
    const newDate = new Date(2024, 2, 9, 0, 0, 0);
    const result = updateDateTime(currentDate as any, newDate, true, false);

    expect(result instanceof Date).toBe(true);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(2);
    expect(result.getDate()).toBe(9);
  });
});

describe('isPresetActive', () => {
  test('returns true for identical single dates', () => {
    const date1 = new Date(2024, 5, 10, 12, 0, 0);
    const date2 = new Date(2024, 5, 10, 12, 0, 0);

    expect(isPresetActive(date1, date2)).toBe(true);
  });

  test('returns false for different single dates', () => {
    const date1 = new Date(2024, 5, 10, 12, 0, 0);
    const date2 = new Date(2024, 5, 11, 12, 0, 0);
    expect(isPresetActive(date1, date2)).toBe(false);
  });

  test('returns true for identical date ranges', () => {
    const range1: [Date, Date] = [
      new Date(2024, 5, 10, 0, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    const range2: [Date, Date] = [
      new Date(2024, 5, 10, 0, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];

    expect(isPresetActive(range1, range2)).toBe(true);
  });

  test('returns false for different date ranges', () => {
    const range1: [Date, Date] = [
      new Date(2024, 5, 10, 0, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    const range2: [Date, Date] = [
      new Date(2024, 5, 11, 0, 0, 0),
      new Date(2024, 5, 16, 23, 59, 59)
    ];

    expect(isPresetActive(range1, range2)).toBe(false);
  });

  test('returns false for mismatched types (single vs range)', () => {
    const date = new Date(2024, 5, 10, 12, 0, 0);
    const range: [Date, Date] = [
      new Date(2024, 5, 10, 0, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];

    expect(isPresetActive(date, range)).toBe(false);
    expect(isPresetActive(range, date)).toBe(false);
  });

  test('returns false if value is undefined', () => {
    const date = new Date(2024, 5, 10, 12, 0, 0);

    expect(isPresetActive(date, undefined as any)).toBe(false);
  });
});

describe('getMonthNames', () => {
  test('should return month names in default (short) format', () => {
    const months = getMonthNames('en-US', 'short');
    expect(months).toHaveLength(12);
    expect(months[0]).toMatch(/Jan|1/);
  });

  test('should return month names in long format', () => {
    const months = getMonthNames('en-US', 'long');
    expect(months[0]).toMatch(/January/);
  });

  test('should return month names in numeric format', () => {
    const months = getMonthNames('en-US', 'numeric');
    expect(months[0]).toBe('1');
  });

  test('should return month names in 2-digit format', () => {
    const months = getMonthNames('en-US', '2-digit');
    expect(months[0]).toBe('01');
  });

  test('should return month names in narrow format', () => {
    const months = getMonthNames('en-US', 'narrow');
    expect(months[0].length).toBe(1);
  });

  test('should use browser locale if locale is undefined and window is defined', () => {
    const originalWindow = globalThis.window;
    globalThis.window = {
      navigator: {
        language: 'en-US',
        clipboard: {},
        credentials: {},
        doNotTrack: '',
        geolocation: {},
        hardwareConcurrency: 4,
        maxTouchPoints: 0,
        mediaCapabilities: {},
        mediaDevices: {},
        mediaSession: {},
        permissions: {},
        platform: '',
        serviceWorker: {},
        storage: {},
        userActivation: {},
        usb: {},
        wakeLock: {},
        webdriver: false
      }
    } as any;
    const months = getMonthNames(undefined, 'short');
    expect(months).toHaveLength(12);
    globalThis.window = originalWindow;
  });
});

describe('getDayLabels (browser context)', () => {
  test('should use browser locale if locale is undefined and window is defined', () => {
    const originalWindow = globalThis.window;
    globalThis.window = {
      navigator: {
        language: 'en-US',
        clipboard: {},
        credentials: {},
        doNotTrack: '',
        geolocation: {},
        hardwareConcurrency: 4,
        maxTouchPoints: 0,
        mediaCapabilities: {},
        mediaDevices: {},
        mediaSession: {},
        permissions: {},
        platform: '',
        serviceWorker: {},
        storage: {},
        userActivation: {},
        usb: {},
        wakeLock: {},
        webdriver: false
      }
    } as any;
    const labels = getDayLabels();
    expect(labels).toHaveLength(7);
    globalThis.window = originalWindow;
  });
});

describe('getWeeks edge cases', () => {
  test('should throw if date is undefined', () => {
    expect(() => getWeeks(undefined as any)).toThrow('A date is required');
  });

  test('should warn and use today if date is invalid', () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const result = getWeeks(new Date('invalid-date'));
    expect(result).toBeDefined();
    expect(spy).toHaveBeenCalledWith(
      'Invalid date - setting to today',
      expect.any(Date)
    );
    spy.mockRestore();
  });
});

describe('isPresetActive (includeTime=true)', () => {
  test('returns true for identical single dates with same time', () => {
    const date1 = new Date(2024, 5, 10, 12, 0, 0);
    const date2 = new Date(2024, 5, 10, 12, 0, 0);
    expect(isPresetActive(date1, date2, true)).toBe(true);
  });

  test('returns false for single dates with different times', () => {
    const date1 = new Date(2024, 5, 10, 12, 0, 0);
    const date2 = new Date(2024, 5, 10, 13, 0, 0);
    expect(isPresetActive(date1, date2, true)).toBe(false);
  });

  test('returns true for identical date ranges with same time', () => {
    const range1: [Date, Date] = [
      new Date(2024, 5, 10, 10, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    const range2: [Date, Date] = [
      new Date(2024, 5, 10, 10, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    expect(isPresetActive(range1, range2, true)).toBe(true);
  });

  test('returns false for date ranges with different times', () => {
    const range1: [Date, Date] = [
      new Date(2024, 5, 10, 10, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    const range2: [Date, Date] = [
      new Date(2024, 5, 10, 11, 0, 0),
      new Date(2024, 5, 15, 23, 59, 59)
    ];
    expect(isPresetActive(range1, range2, true)).toBe(false);
  });
});
