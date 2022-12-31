import React from 'react';
import { Card } from './Card';

export default {
  title: 'Layout/Card',
  component: Card
};

export const Basic = () => <Card>Basic card</Card>;

export const NoPadding = () => <Card disablePadding>No padding card</Card>;

export const Header = () => <Card header="Pro Tip">Headers are headers</Card>;
