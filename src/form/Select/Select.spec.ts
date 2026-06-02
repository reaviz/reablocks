import { describe, test, expect } from 'vitest';
import { filterOptionsByKeyword } from './utils/filter';
import type { SelectOptionProps } from './SelectOption';

const options: SelectOptionProps[] = [
  { children: 'Apple', group: 'Fruit', value: 'apple' },
  { children: 'Apricot', group: 'Fruit', value: 'apricot' },
  { children: 'Broccoli', group: 'Vegetable', value: 'broccoli' },
  { children: 'Carrot', group: 'Vegetable', value: 'carrot' }
];

describe('Select text-filter contract', () => {
  test('case-insensitive substring match on option label', () => {
    expect(filterOptionsByKeyword(options, 'app').map(o => o.value)).toEqual([
      'apple'
    ]);
    expect(filterOptionsByKeyword(options, 'APP').map(o => o.value)).toEqual([
      'apple'
    ]);
  });

  test('also matches by group name', () => {
    expect(
      filterOptionsByKeyword(options, 'vegetable').map(o => o.value)
    ).toEqual(['broccoli', 'carrot']);
  });

  test('non-match returns empty', () => {
    expect(filterOptionsByKeyword(options, 'zzz')).toHaveLength(0);
  });

  test('empty keyword returns all options', () => {
    expect(filterOptionsByKeyword(options, '')).toHaveLength(options.length);
  });

  test('preserves source order (no fuzzy-score reordering)', () => {
    expect(filterOptionsByKeyword(options, 'a').map(o => o.value)).toEqual([
      'apple',
      'apricot',
      'broccoli',
      'carrot'
    ]);
  });

  test('handles missing/non-string children safely', () => {
    const edgeOptions: SelectOptionProps[] = [
      { value: 'a', group: 'fruit' },
      { value: 'b', children: null as unknown as string, group: 'fruit' },
      { value: 'c', children: 'banana', group: 'fruit' }
    ];
    expect(
      filterOptionsByKeyword(edgeOptions, 'banana').map(o => o.value)
    ).toEqual(['c']);
    expect(
      filterOptionsByKeyword(edgeOptions, 'fruit').map(o => o.value)
    ).toEqual(['a', 'b', 'c']);
  });
});
