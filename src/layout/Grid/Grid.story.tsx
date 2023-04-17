import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid } from './Grid';
import { Column } from './Column';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    rowSpacing: { control: 'number' },
    columnSpacing: { control: 'number' }
  }
} as Meta;

interface GridStoryProps {
  rowSpacing?: number;
  columnSpacing?: number;
}

const GridStory: Story<GridStoryProps> = ({ rowSpacing, columnSpacing }) => (
  <Grid rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
    <Column xs={6}>
      <div
        style={{
          backgroundColor: 'lightblue',
          padding: '16px',
          minHeight: '100px'
        }}
      >
        Column 1
      </div>
    </Column>
    <Column xs={6}>
      <div
        style={{
          backgroundColor: 'lightgreen',
          padding: '16px',
          minHeight: '100px'
        }}
      >
        Column 2
      </div>
    </Column>
    <Column xs={12}>
      <div
        style={{
          backgroundColor: 'lightcoral',
          padding: '16px',
          minHeight: '100px'
        }}
      >
        Column 3
      </div>
    </Column>
  </Grid>
);

export const Default = GridStory.bind({});
Default.args = {
  rowSpacing: 16,
  columnSpacing: 16
};
