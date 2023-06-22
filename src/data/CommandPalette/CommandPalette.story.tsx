import { CommandPalette } from './CommandPalette';
import { Dialog } from '../../layers/Dialog';
import { Chip } from '../../elements/Chip';
import { Divider } from '../../layout/Divider';
import { Spacer } from '../../layout/Spacer';
import { CommandPaletteSection } from './CommandPaletteSection';
import { CommandPaletteItem } from './CommandPaletteItem';

export default {
  title: 'Components/Data/Command Palette',
  component: CommandPalette
};

export const Simple = () => (
  <div style={{ width: 400 }}>
    <CommandPalette
      placeholder="Type a command or search..."
      onSelectedIndexChange={sel => console.log('Selection', sel)}
    >
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="home">Home</CommandPaletteItem>
        <CommandPaletteItem key="inbox">Inbox</CommandPaletteItem>
        <CommandPaletteItem key="settings">Settings</CommandPaletteItem>
      </CommandPaletteSection>
      <Divider />
      <CommandPaletteSection title="Suggestions" key="sugs">
        <CommandPaletteItem key="shortcut">Create Shortcut</CommandPaletteItem>
        <CommandPaletteItem key="export">Export Data</CommandPaletteItem>
        <CommandPaletteItem key="invite">Invite User</CommandPaletteItem>
      </CommandPaletteSection>
    </CommandPalette>
  </div>
);

export const Sections = () => (
  <div style={{ width: 400 }}>
    <CommandPalette placeholder="Type a command or search...">
      <CommandPaletteSection key="shorts">
        <CommandPaletteItem disablePadding>
          <Spacer>
            <Chip>Dashboards</Chip>
            <Chip>Integrations</Chip>
            <Chip>Rules</Chip>
          </Spacer>
        </CommandPaletteItem>
      </CommandPaletteSection>
      <Divider />
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="ciso">CISO Dashboard</CommandPaletteItem>
        <CommandPaletteItem key="reqs">Recommendations</CommandPaletteItem>
        <CommandPaletteItem key="sets">Settings</CommandPaletteItem>
      </CommandPaletteSection>
      <Divider />
      <CommandPaletteSection key="aws">
        <div
          style={{
            background: 'var(--red-200)',
            color: 'var(--white)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--border-radius-md)'
          }}
        >
          🚨 AWS Account not configured. Link your account →
        </div>
      </CommandPaletteSection>
    </CommandPalette>
  </div>
);

const DemoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="white"
      d="M7.05037 2.43562C7.47505 1.70912 8.52499 1.70912 8.94967 2.43562L10.5591 5.18886L13.7314 5.81912C14.5791 5.98756 14.9104 7.02301 14.3178 7.65222L12.1512 9.95255L12.5125 13.0632C12.6106 13.9079 11.7541 14.5397 10.976 14.1966L8.00002 12.8845L5.02399 14.1966C4.24592 14.5397 3.38946 13.9079 3.48756 13.0632L3.84882 9.95255L1.68228 7.65222C1.08968 7.02301 1.42092 5.98756 2.26868 5.81912L5.44095 5.18886L7.05037 2.43562ZM8.00002 3.1889L6.34068 6.02753C6.25403 6.17577 6.10802 6.27978 5.93961 6.31324L2.67965 6.96093L4.9138 9.33306C5.03517 9.46193 5.09343 9.63781 5.07301 9.81365L4.69969 13.0282L7.75796 11.6797C7.91217 11.6117 8.08787 11.6117 8.24208 11.6797L11.3003 13.0282L10.927 9.81365C10.9066 9.63781 10.9649 9.46193 11.0862 9.33306L13.3204 6.96093L10.0604 6.31324C9.89202 6.27978 9.74601 6.17577 9.65936 6.02753L8.00002 3.1889Z"
    />
  </svg>
);

export const WithIcons = () => (
  <div style={{ width: 400 }}>
    <CommandPalette placeholder="Type a command or search...">
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="home" start={<DemoIcon />}>
          Home
        </CommandPaletteItem>
        <CommandPaletteItem key="inbox">Inbox</CommandPaletteItem>
        <CommandPaletteItem key="setts" end={<DemoIcon />}>
          Settings
        </CommandPaletteItem>
      </CommandPaletteSection>
    </CommandPalette>
  </div>
);

export const Empty = () => (
  <div style={{ width: 400 }}>
    <CommandPalette
      placeholder="Type a command or search..."
      emptyMessage="😢 No item(s) found."
    />
  </div>
);

export const NoSection = () => (
  <div style={{ width: 400 }}>
    <CommandPalette placeholder="Type a command or search...">
      <CommandPaletteItem key="homeciso">Home</CommandPaletteItem>
      <CommandPaletteItem key="inbox">Inbox</CommandPaletteItem>
      <CommandPaletteItem key="settings">Settings</CommandPaletteItem>
    </CommandPalette>
  </div>
);

export const LongList = () => (
  <div style={{ width: 400 }}>
    <CommandPalette placeholder="Type a command or search...">
      {Array.from({ length: 100 }, (_, i) => (
        <CommandPaletteItem key={i}>Item {i}</CommandPaletteItem>
      ))}
    </CommandPalette>
  </div>
);

export const WithDialog = () => (
  <Dialog open size={400} showCloseButton={false} disablePadding>
    <CommandPalette placeholder="Type a command or search...">
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="home">Home</CommandPaletteItem>
        <CommandPaletteItem key="inbox">Inbox</CommandPaletteItem>
        <CommandPaletteItem key="sets">Settings</CommandPaletteItem>
      </CommandPaletteSection>
    </CommandPalette>
  </Dialog>
);
