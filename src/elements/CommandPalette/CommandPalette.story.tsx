import { CommandPalette } from './CommandPalette';
import { Dialog } from '../../layers/Dialog';
import { Chip } from '../Chip';
import { Divider } from '../../layout/Divider';
import { Stack } from '../../layout/Stack';
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
        <Stack style={{ margin: '0 var(--spacing-md)' }}>
          <Chip>Dashboards</Chip>
          <Chip>Integrations</Chip>
          <Chip>Rules</Chip>
        </Stack>
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
            margin: '0 var(--spacing-md) var(--spacing-md) var(--spacing-md)',
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

export const WithIcons = () => (
  <div style={{ width: 400 }}>
    <CommandPalette placeholder="Type a command or search...">
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="home" start={<HomeIcon />}>
          Home
        </CommandPaletteItem>
        <CommandPaletteItem key="inbox" start={<InboxIcon />}>
          Inbox
        </CommandPaletteItem>
        <CommandPaletteItem key="setts" start={<SettingsIcon />}>
          Settings
        </CommandPaletteItem>
      </CommandPaletteSection>
    </CommandPalette>
  </div>
);

export const Hotkey = () => (
  <div style={{ width: 400 }}>
    <CommandPalette
      placeholder="Type a command or search..."
      onHotkey={item =>
        alert(`Key '${item.hotkey}' trigged by '${item.index}'`)
      }
    >
      <CommandPaletteSection title="Recently Used" key="recent">
        <CommandPaletteItem key="home" hotkey="plus">
          Home
        </CommandPaletteItem>
        <CommandPaletteItem key="inbox" hotkey="meta+z">
          Inbox
        </CommandPaletteItem>
        <CommandPaletteItem key="setts" hotkey="meta+k">
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

const InboxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    width="22px"
    height="22px"
  >
    <path d="M 7.15625 5 L 7 5.84375 L 5 18.84375 L 5 27 L 27 27 L 27 18.84375 L 25 5.84375 L 24.84375 5 Z M 8.875 7 L 23.125 7 L 24.8125 18 L 18 18 L 18 19 C 18 20.117188 17.117188 21 16 21 C 14.882813 21 14 20.117188 14 19 L 14 18 L 7.1875 18 Z M 7 20 L 12.1875 20 C 12.640625 21.710938 14.152344 23 16 23 C 17.847656 23 19.359375 21.710938 19.8125 20 L 25 20 L 25 25 L 7 25 Z" />
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    width="22px"
    height="22px"
  >
    <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    width="22px"
    height="22px"
  >
    <path d="M 13.1875 3 L 13.03125 3.8125 L 12.4375 6.78125 C 11.484375 7.15625 10.625 7.683594 9.84375 8.3125 L 6.9375 7.3125 L 6.15625 7.0625 L 5.75 7.78125 L 3.75 11.21875 L 3.34375 11.9375 L 3.9375 12.46875 L 6.1875 14.4375 C 6.105469 14.949219 6 15.460938 6 16 C 6 16.539063 6.105469 17.050781 6.1875 17.5625 L 3.9375 19.53125 L 3.34375 20.0625 L 3.75 20.78125 L 5.75 24.21875 L 6.15625 24.9375 L 6.9375 24.6875 L 9.84375 23.6875 C 10.625 24.316406 11.484375 24.84375 12.4375 25.21875 L 13.03125 28.1875 L 13.1875 29 L 18.8125 29 L 18.96875 28.1875 L 19.5625 25.21875 C 20.515625 24.84375 21.375 24.316406 22.15625 23.6875 L 25.0625 24.6875 L 25.84375 24.9375 L 26.25 24.21875 L 28.25 20.78125 L 28.65625 20.0625 L 28.0625 19.53125 L 25.8125 17.5625 C 25.894531 17.050781 26 16.539063 26 16 C 26 15.460938 25.894531 14.949219 25.8125 14.4375 L 28.0625 12.46875 L 28.65625 11.9375 L 28.25 11.21875 L 26.25 7.78125 L 25.84375 7.0625 L 25.0625 7.3125 L 22.15625 8.3125 C 21.375 7.683594 20.515625 7.15625 19.5625 6.78125 L 18.96875 3.8125 L 18.8125 3 Z M 14.8125 5 L 17.1875 5 L 17.6875 7.59375 L 17.8125 8.1875 L 18.375 8.375 C 19.511719 8.730469 20.542969 9.332031 21.40625 10.125 L 21.84375 10.53125 L 22.40625 10.34375 L 24.9375 9.46875 L 26.125 11.5 L 24.125 13.28125 L 23.65625 13.65625 L 23.8125 14.25 C 23.941406 14.820313 24 15.402344 24 16 C 24 16.597656 23.941406 17.179688 23.8125 17.75 L 23.6875 18.34375 L 24.125 18.71875 L 26.125 20.5 L 24.9375 22.53125 L 22.40625 21.65625 L 21.84375 21.46875 L 21.40625 21.875 C 20.542969 22.667969 19.511719 23.269531 18.375 23.625 L 17.8125 23.8125 L 17.6875 24.40625 L 17.1875 27 L 14.8125 27 L 14.3125 24.40625 L 14.1875 23.8125 L 13.625 23.625 C 12.488281 23.269531 11.457031 22.667969 10.59375 21.875 L 10.15625 21.46875 L 9.59375 21.65625 L 7.0625 22.53125 L 5.875 20.5 L 7.875 18.71875 L 8.34375 18.34375 L 8.1875 17.75 C 8.058594 17.179688 8 16.597656 8 16 C 8 15.402344 8.058594 14.820313 8.1875 14.25 L 8.34375 13.65625 L 7.875 13.28125 L 5.875 11.5 L 7.0625 9.46875 L 9.59375 10.34375 L 10.15625 10.53125 L 10.59375 10.125 C 11.457031 9.332031 12.488281 8.730469 13.625 8.375 L 14.1875 8.1875 L 14.3125 7.59375 Z M 16 11 C 13.25 11 11 13.25 11 16 C 11 18.75 13.25 21 16 21 C 18.75 21 21 18.75 21 16 C 21 13.25 18.75 11 16 11 Z M 16 13 C 17.667969 13 19 14.332031 19 16 C 19 17.667969 17.667969 19 16 19 C 14.332031 19 13 17.667969 13 16 C 13 14.332031 14.332031 13 16 13 Z" />
  </svg>
);
