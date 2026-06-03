import { describe, test, expect } from 'vitest';
import { highlightChunks } from './highlight';

describe('highlightChunks', () => {
  test('empty keyword returns the whole text as a single non-highlighted chunk', () => {
    expect(highlightChunks('Apple', '')).toEqual([
      { text: 'Apple', highlight: false }
    ]);
  });

  test('no match returns the whole text as a single non-highlighted chunk', () => {
    expect(highlightChunks('Apple', 'z')).toEqual([
      { text: 'Apple', highlight: false }
    ]);
  });

  test('single match at the start', () => {
    expect(highlightChunks('Apple', 'App')).toEqual([
      { text: 'App', highlight: true },
      { text: 'le', highlight: false }
    ]);
  });

  test('single match in the middle', () => {
    expect(highlightChunks('Pineapple', 'app')).toEqual([
      { text: 'Pine', highlight: false },
      { text: 'app', highlight: true },
      { text: 'le', highlight: false }
    ]);
  });

  test('single match at the end', () => {
    expect(highlightChunks('Apple', 'ple')).toEqual([
      { text: 'Ap', highlight: false },
      { text: 'ple', highlight: true }
    ]);
  });

  test('multiple non-adjacent matches', () => {
    expect(highlightChunks('a-b-a-b', 'a')).toEqual([
      { text: 'a', highlight: true },
      { text: '-b-', highlight: false },
      { text: 'a', highlight: true },
      { text: '-b', highlight: false }
    ]);
  });

  test('case-insensitive matching preserves original casing in chunks', () => {
    expect(highlightChunks('Apple', 'apple')).toEqual([
      { text: 'Apple', highlight: true }
    ]);
    expect(highlightChunks('apple', 'APPLE')).toEqual([
      { text: 'apple', highlight: true }
    ]);
  });

  test('adjacent matches produce non-overlapping full coverage', () => {
    // 'aa' in 'aaaa' -> two highlighted chunks, advancing by keyword.length
    expect(highlightChunks('aaaa', 'aa')).toEqual([
      { text: 'aa', highlight: true },
      { text: 'aa', highlight: true }
    ]);
  });

  test('keyword with regex-special chars is treated literally', () => {
    expect(highlightChunks('a(b)c', '(')).toEqual([
      { text: 'a', highlight: false },
      { text: '(', highlight: true },
      { text: 'b)c', highlight: false }
    ]);
    expect(highlightChunks('a.b.c', '.')).toEqual([
      { text: 'a', highlight: false },
      { text: '.', highlight: true },
      { text: 'b', highlight: false },
      { text: '.', highlight: true },
      { text: 'c', highlight: false }
    ]);
  });

  test('keyword longer than text returns the whole text non-highlighted', () => {
    expect(highlightChunks('ab', 'abcdef')).toEqual([
      { text: 'ab', highlight: false }
    ]);
  });

  test('empty text returns a single non-highlighted chunk regardless of keyword', () => {
    expect(highlightChunks('', 'foo')).toEqual([
      { text: '', highlight: false }
    ]);
    expect(highlightChunks('', '')).toEqual([{ text: '', highlight: false }]);
  });

  test('stringified numeric children are highlighted (SelectMenu coercion path)', () => {
    expect(highlightChunks(String(12345), '23')).toEqual([
      { text: '1', highlight: false },
      { text: '23', highlight: true },
      { text: '45', highlight: false }
    ]);
  });
});
