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

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <DeletableChip size="small" onDelete={() => console.log('on delete')}>
      Deletable
    </DeletableChip>
    <DeletableChip size="medium" onDelete={() => console.log('on delete')}>
      Deletable
    </DeletableChip>
    <DeletableChip size="large" onDelete={() => console.log('on delete')}>
      Deletable
    </DeletableChip>
  </div>
);
