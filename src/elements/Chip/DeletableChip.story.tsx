import { DeletableChip } from './DeletableChip';

export default {
  title: 'Components/Elements/Chip/DeletableChip',
  component: DeletableChip
};

export const Simple = () => (
  <DeletableChip onDelete={() => console.log('on delete')}>
    Deletable
  </DeletableChip>
);
