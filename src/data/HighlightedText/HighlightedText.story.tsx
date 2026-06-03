import React from 'react';
import { HighlightedText } from './HighlightedText';

export default {
  title: 'Components/Data/HighlightedText',
  component: HighlightedText
};

export const Basic = () => (
  <HighlightedText search="face">facebook</HighlightedText>
);

export const MultipleMatches = () => (
  <HighlightedText search="an">banana and mango</HighlightedText>
);

export const CaseInsensitive = () => (
  <HighlightedText search="git">GitHub</HighlightedText>
);

export const SpecialCharacters = () => (
  <HighlightedText search="(beta)">Reablocks (beta) release</HighlightedText>
);

export const NoMatch = () => (
  <HighlightedText search="xyz">facebook</HighlightedText>
);

export const EmptySearch = () => <HighlightedText>facebook</HighlightedText>;

export const NumericChildren = () => (
  <HighlightedText search="23">{12345}</HighlightedText>
);

export const NonTextChildren = () => (
  <HighlightedText search="face">
    <em>rich content renders unchanged</em>
  </HighlightedText>
);
