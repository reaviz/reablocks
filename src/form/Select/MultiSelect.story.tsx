import React, { FC, Fragment, useEffect, useState } from 'react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { SelectMenu } from './SelectMenu';
import { SelectInput, SelectInputChip } from './SelectInput';

const CheckIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM7.99998 13.3334C5.05998 13.3334 2.66665 10.94 2.66665 8.00004C2.66665 5.06004 5.05998 2.66671 7.99998 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 7.99998 13.3334ZM11.06 5.05337L6.66665 9.44671L4.93998 7.72671L3.99998 8.66671L6.66665 11.3334L12 6.00004L11.06 5.05337Z" />
  </svg>
);

export default {
  title: 'Components/Form/Select/Multi',
  component: Select,
  subcomponents: {
    SelectOption,
    SelectMenu,
    SelectInput,
    SelectInputChip
  }
};

const options = [
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'github', label: 'GitHub' },
  { value: 'google', label: 'Google' },
  { value: 'azure', label: 'Azure' }
];

export const Basic = () => {
  const [value, setValue] = useState<string[] | null>(null);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        placeholder="Select a category..."
        value={value}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const PreventClearInput = () => {
  const [value, setValue] = useState<string[] | null>(['facebook']);

  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        placeholder="Select a category..."
        value={value}
        clearOnBlur={false}
        onChange={v => setValue(v)}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState<string[] | null>(['facebook']);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        disabled
        placeholder="Select a category..."
        value={value}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const DefaultValue = () => {
  const [value, setValue] = useState<string[]>(['facebook', 'twitter']);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        placeholder="Select a category..."
        value={value}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const CustomLabels = () => {
  const [value, setValue] = useState<string[] | null>(['facebook']);
  return (
    <div style={{ width: 300 }}>
      <Select
        value={value}
        multiple
        placeholder="Select a type..."
        onChange={v => setValue(v)}
      >
        <SelectOption
          value="facebook"
          inputLabel={<Fragment>🔑 facebook</Fragment>}
          menuLabel={<Fragment>🔑 facebook</Fragment>}
        >
          🔑 facebook
        </SelectOption>
        <SelectOption
          value="twitter"
          inputLabel={<Fragment>🔐 twitter</Fragment>}
          menuLabel={<Fragment>🔐 twitter</Fragment>}
        >
          🔐 twitter
        </SelectOption>
        <SelectOption
          value="twitch"
          inputLabel={<Fragment>🔥 twitch</Fragment>}
          menuLabel={<Fragment>🔥 twitch</Fragment>}
        >
          🔥 twitch
        </SelectOption>
      </Select>
    </div>
  );
};

export const CustomCheckIcon = () => {
  const [value, setValue] = useState<string[]>(['facebook']);
  return (
    <div style={{ width: 300 }}>
      <Select
        closeOnSelect={false}
        multiple
        value={value}
        onChange={v => setValue(v)}
        placeholder="Pick a tool..."
        menu={<SelectMenu checkIcon={<CheckIcon />} />}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const Createable = () => {
  const [value, setValue] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>(['chicken', 'cow', 'mouse']);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        createable
        selectOnPaste
        selectOnKeys={['Enter', 'Space', 'Comma']}
        searchOptions={{ threshold: 0 }}
        placeholder="Add some categories or pick existing one..."
        value={value}
        onChange={v => setValue(v)}
        onOptionsChange={opts => setAnimals(opts.map(o => o.value))}
      >
        {animals.map(o => (
          <SelectOption key={o} value={o}>
            {o}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export const LongInputNames = () => {
  const [value, setValue] = useState<string[]>(['dod']);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        value={value}
        onChange={v => setValue(v)}
      >
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>
  );
};

export const MultipleValuesOverflow = () => {
  const [value, setValue] = useState<string[]>(['dod', 'dhs', 'soc']);
  return (
    <div style={{ width: 350 }}>
      <Select
        multiple
        closeOnSelect={false}
        value={value}
        onChange={v => setValue(v)}
      >
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>
  );
};

export const MultipleValuesFixed = () => {
  const [value, setValue] = useState<string[]>(['dod', 'dhs', 'soc']);
  return (
    <div style={{ width: 500 }}>
      <Select
        multiple
        closeOnSelect={false}
        value={value}
        onChange={v => setValue(v)}
      >
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>
  );
};

export const FluidWidth = () => {
  const [value, setValue] = useState<string[]>(['dod']);
  return (
    <div style={{ minWidth: 300 }}>
      <Select
        multiple
        closeOnSelect={false}
        value={value}
        onChange={v => setValue(v)}
      >
        <SelectOption value="dod">
          Department of Defense Logistic and Infrastucture Agency
        </SelectOption>
        <SelectOption value="dhs">
          Department of Homeland Security Operations Center
        </SelectOption>
        <SelectOption value="soc">
          Security Operations Center for Central Intel Agency
        </SelectOption>
      </Select>
    </div>
  );
};

export const Unfilterable = () => {
  const [value, setValue] = useState<string[]>(['dod']);
  return (
    <div style={{ width: 300 }}>
      <Select
        filterable={false}
        closeOnSelect={false}
        multiple
        value={value}
        onChange={v => setValue(v)}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const Error = () => (
  <div style={{ width: 300 }}>
    <Select error multiple />
  </div>
);

export const InvalidValues = () => {
  const [value, setValue] = useState<string[]>(['gop']);
  return (
    <div style={{ width: 300 }}>
      <Select
        closeOnSelect={false}
        multiple
        value={value}
        onChange={v => setValue(v)}
        placeholder="Pick a tool..."
        menu={<SelectMenu checkIcon={<CheckIcon />} />}
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const CreateableNoOptions = () => {
  const [value, setValue] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>([]);
  return (
    <div style={{ width: 300 }}>
      <Select
        multiple
        createable
        placeholder="Add some new categories..."
        value={value}
        menuDisabled
        onOptionsChange={opts => setAnimals(opts.map(o => o.value))}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
      >
        {animals.map(animal => (
          <SelectOption key={animal} value={animal}>
            {animal}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export const Async = () => {
  const [value, setValue] = useState<string | null>('github');
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshable, setRefreshable] = useState<boolean>(false);
  const [opts, setOpts] = useState<{ value: string; label: string }[] | null>(
    null
  );

  useEffect(() => {
    let timeout;

    async function getOptions() {
      const next = await new Promise<any>(resolve => {
        timeout = setTimeout(() => {
          resolve(options);
        }, 1500);
      });

      setOpts(next);
      setLoading(false);
      setRefreshable(true);
    }

    if (opts === null) {
      setLoading(true);
      setRefreshable(false);
      getOptions();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [opts]);

  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select an option..."
        refreshable={refreshable}
        loading={loading}
        multiple
        value={value}
        onChange={v => setValue(v)}
        onRefresh={() => setOpts(null)}
      >
        {opts?.map(o => (
          <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};
