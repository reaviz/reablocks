import { Fragment, useEffect, useState } from 'react';
import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { SelectMenu } from './SelectMenu';
import { SelectInput, SelectInputChip } from './SelectInput';
import { Stack } from '../../layout/Stack';
import { ListItem } from '../../layout/List/ListItem';

export default {
  title: 'Components/Form/Select/Single',
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
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ width: 300 }}>
      <Select
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

export const Sizes = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ width: 500 }}>
      <Stack className="w-full" direction="column">
        <Stack className="w-full">
          <label className="w-[50px]">Small: </label>
          <Select
            placeholder="Select a category"
            value={value}
            size="small"
            className="min-w-[250px]"
            onChange={v => {
              setValue(v);
              console.log('onChange', v);
            }}
          >
            <SelectOption value="facebook">facebook</SelectOption>
            <SelectOption value="twitter">twitter</SelectOption>
            <SelectOption value="twitch">twitch</SelectOption>
          </Select>
        </Stack>
        <Stack className="w-full">
          <label className="w-[50px]">Medium: </label>
          <Select
            placeholder="Select a category"
            value={value}
            className="min-w-[250px]"
            onChange={v => {
              setValue(v);
              console.log('onChange', v);
            }}
          >
            <SelectOption value="facebook">facebook</SelectOption>
            <SelectOption value="twitter">twitter</SelectOption>
            <SelectOption value="twitch">twitch</SelectOption>
          </Select>
        </Stack>
        <Stack className="w-full">
          <label className="w-[50px]">Large: </label>
          <Select
            placeholder="Select a category"
            value={value}
            size="large"
            className="min-w-[250px]"
            onChange={v => {
              setValue(v);
              console.log('onChange', v);
            }}
          >
            <SelectOption value="facebook">facebook</SelectOption>
            <SelectOption value="twitter">twitter</SelectOption>
            <SelectOption value="twitch">twitch</SelectOption>
          </Select>
        </Stack>
      </Stack>
    </div>
  );
};

export const Fonts = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div
      style={{
        width: 300,
        fontFamily: `"Electrolux Sans", system-ui, -apple-system,BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji`
      }}
    >
      <Select
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

export const NoOptions = () => (
  <div style={{ width: 300 }}>
    <Select placeholder="Select a category..." />
  </div>
);

export const ManyOptions = () => {
  const [value, setValue] = useState<string | null>(null);
  const options = [...Array(300).keys()];

  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select a category..."
        value={value}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
      >
        {options.map(o => (
          <SelectOption key={o} value={`${o}`}>
            {`Option ${o}`}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export const DefaultValue = () => {
  const [value, setValue] = useState<string | null>('facebook');
  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select a category..."
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

export const InvalidValues = () => {
  const [value, setValue] = useState<string | null>('gop');
  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select a category..."
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

export const OptionsArray = () => {
  const [value, setValue] = useState<string | null>('github');
  return (
    <div style={{ width: 300, marginTop: '100px' }}>
      <Select value={value} onChange={v => setValue(v)}>
        {options.map(o => (
          <SelectOption key={o.value} value={o.value}>
            {o.label}
          </SelectOption>
        ))}
      </Select>
    </div>
  );
};

export const Autofocus = () => {
  const [value, setValue] = useState<string | null>('facebook');
  return (
    <div style={{ width: 300 }}>
      <Select autoFocus value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const LongInputNames = () => {
  const [value, setValue] = useState<string | null>('dod');
  return (
    <div style={{ width: 300 }}>
      <Select value={value} onChange={v => setValue(v)}>
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
  const [value, setValue] = useState<string | null>('dod');
  return (
    <div style={{ minWidth: 300 }}>
      <Select value={value} onChange={v => setValue(v)}>
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

export const Groups = () => {
  const [value, setValue] = useState<string | null>('twitch');
  return (
    <div style={{ width: 300 }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook" group="Social Media">
          Facebook
        </SelectOption>
        <SelectOption value="twitter" group="Social Media">
          Twitter
        </SelectOption>
        <SelectOption value="azure" group="Cloud">
          Azure
        </SelectOption>
        <SelectOption value="aws" group="Cloud">
          AWS
        </SelectOption>
        <SelectOption value="gcp" group="Cloud">
          GCP
        </SelectOption>
      </Select>
    </div>
  );
};

export const LongGroupNames = () => {
  const [value, setValue] = useState<string | null>('twitch');
  return (
    <div style={{ width: 300 }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption
          value="twitch"
          group="Palo Alto Interior Office with International Space"
        >
          twitch
        </SelectOption>
        <SelectOption
          value="soar"
          group="Palo Alto Interior Office with International Space"
        >
          SOAR
        </SelectOption>
        <SelectOption
          value="twitter"
          group="AWS Federal Accredited Program with International Space"
        >
          twitter
        </SelectOption>
        <SelectOption
          value="lambda"
          group="AWS Federal Accredited Program with International Space"
        >
          Lambda
        </SelectOption>
        <SelectOption
          value="db"
          group="AWS Department of Human Resources with International Space"
        >
          Database
        </SelectOption>
      </Select>
    </div>
  );
};

export const MixedGroups = () => {
  const [value, setValue] = useState<string | null>('twitch');
  return (
    <div style={{ width: 300 }}>
      <Select value={value} onChange={v => setValue(v)}>
        <SelectOption value="twitch">Twitch</SelectOption>
        <SelectOption value="facebook" group="Social Media">
          facebook
        </SelectOption>
        <SelectOption value="twitter" group="Social Media">
          twitter
        </SelectOption>
        <SelectOption value="aws" group="Cloud">
          AWS
        </SelectOption>
        <SelectOption value="azure" group="Cloud">
          Azure
        </SelectOption>
      </Select>
    </div>
  );
};

export const LoadingIcon = () => (
  <div style={{ width: 300 }}>
    <Select loading />
  </div>
);

export const Error = () => (
  <div style={{ width: 300 }}>
    <Select error />
  </div>
);

export const RefreshIcon = () => (
  <div style={{ width: 300 }}>
    <Select refreshable />
  </div>
);

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

export const AsyncDefaultValue = () => {
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
          resolve([...options]);
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

export const AsyncFiltering = () => {
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [opts, setOpts] = useState<{ value: string; label: string }[] | null>(
    null
  );

  useEffect(() => {
    let timeout;

    async function getOptions() {
      const next = await new Promise<any>(resolve => {
        timeout = setTimeout(() => {
          resolve(options);
        }, 300);
      });

      const filtered = next.filter(n =>
        n.label.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setOpts(filtered);
      setLoading(false);
    }

    if (inputValue) {
      getOptions();
    } else {
      setOpts(null);
      setLoading(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue]);

  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Start typing to find options..."
        filterable="async"
        loading={loading}
        value={value}
        onChange={v => setValue(v)}
        onInputKeydown={(e: any) => setInputValue(e.target.value)}
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

export const CustomLabels = () => {
  const [value, setValue] = useState<string | null>('facebook');
  return (
    <div style={{ width: 300 }}>
      <Select
        value={value}
        onChange={v => setValue(v)}
        placeholder="Select a type..."
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

export const CustomLongLabels = () => {
  const [value, setValue] = useState<string | null>('facebook');
  return (
    <div style={{ width: 300 }}>
      <Select
        value={value}
        onChange={v => setValue(v)}
        placeholder="Select a type..."
      >
        <SelectOption
          value="facebook"
          inputLabel={
            <Fragment>🔥 Data Loss Prevention for Military Sector</Fragment>
          }
          menuLabel={
            <Fragment>🔥 Data Loss Prevention for Military Sector</Fragment>
          }
        >
          Data Loss Prevention for Military Sector
        </SelectOption>
        <SelectOption
          value="twitter"
          inputLabel={
            <Fragment>🔥 Identity Access Management for Federal Gov</Fragment>
          }
          menuLabel={
            <Fragment>🔥 Identity Access Management for Federal Gov</Fragment>
          }
        >
          Identity Access Management for Federal Gov
        </SelectOption>
        <SelectOption
          value="twitch"
          inputLabel={
            <Fragment>🔥 Enterprise twitch Integration for US</Fragment>
          }
          menuLabel={
            <Fragment>🔥 Enterprise twitch Integration for US</Fragment>
          }
        >
          Enterprise twitch Integration for US
        </SelectOption>
      </Select>
    </div>
  );
};

export const Disabled = () => (
  <div style={{ width: 300 }}>
    <Select disabled value="facebook">
      <SelectOption value="facebook">facebook</SelectOption>
      <SelectOption value="twitter">twitter</SelectOption>
      <SelectOption value="twitch">twitch</SelectOption>
    </Select>
  </div>
);

export const DisabledOption = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ width: 300 }}>
      <Select value={value} onChange={v => setValue(v)} placeholder="Select...">
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter" disabled>
          twitter
        </SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const Unfilterable = () => {
  const [value, setValue] = useState<string | null>('facebook');
  return (
    <div style={{ width: 300 }}>
      <Select filterable={false} value={value} onChange={v => setValue(v)}>
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const Createable = () => {
  const [value, setValue] = useState<string | null>(null);
  const [animals, setAnimals] = useState<string[]>(['chicken', 'cow', 'mouse']);
  return (
    <div style={{ width: 300 }}>
      <Select
        createable
        placeholder="Add a category or pick existing one..."
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

export const CustomCreatableOption = () => {
  const [value, setValue] = useState<string | null>(null);
  const [animals, setAnimals] = useState<string[]>(['chicken', 'cow', 'mouse']);
  return (
    <div style={{ width: 300 }}>
      <Select
        createable
        renderCreateOption={(value, onSelect) => (
          <ListItem
            onClick={() =>
              onSelect({
                value: value.toLowerCase(),
                children: value.toLowerCase()
              })
            }
          >
            ➕&nbsp;Create "{value}"
          </ListItem>
        )}
        placeholder="Add a category or pick existing one..."
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

export const TabToSelect = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select a category..."
        value={value}
        onChange={v => setValue(v)}
        tabToSelect
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};

export const DefaultFilter = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div style={{ width: 300 }}>
      <Select
        placeholder="Select a category..."
        value={value}
        onChange={v => {
          setValue(v);
          console.log('onChange', v);
        }}
        defaultFilterValue="twi"
      >
        <SelectOption value="facebook">facebook</SelectOption>
        <SelectOption value="twitter">twitter</SelectOption>
        <SelectOption value="twitch">twitch</SelectOption>
      </Select>
    </div>
  );
};
