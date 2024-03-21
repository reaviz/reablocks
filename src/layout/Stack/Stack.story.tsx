import { Stack } from './Stack';
import React from 'react';

export default {
  title: 'Components/Layout/Stack',
  components: Stack
};

export const Simple = () => (
  <Stack>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Stack>
);

export const Dense = () => (
  <Stack dense>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Stack>
);

export const Columns = () => (
  <Stack direction="column">
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Stack>
);

export const Alignments = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '30px 100px'
    }}
  >
    <div>Start (Row)</div>
    <div>End (Row)</div>
    <div>Center (Row)</div>
    <Stack
      direction="row"
      alignItems="start"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="row"
      alignItems="end"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="row"
      alignItems="center"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <div>Start (Column)</div>
    <div>End (Column)</div>
    <div>Center (Column)</div>
    <Stack
      direction="column"
      alignItems="start"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="column"
      alignItems="end"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="column"
      alignItems="center"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
  </div>
);

export const JustifyContent = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 250px)',
      gridTemplateRows: '1fr 250px 1fr 250px',
      gap: '20px 100px'
    }}
  >
    <div>Start (Row)</div>
    <div>End (Row)</div>
    <div>Center (Row)</div>
    <div>Space Between (Row)</div>
    <Stack
      direction="row"
      justifyContent="start"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="row"
      justifyContent="end"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="row"
      justifyContent="center"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="row"
      justifyContent="spaceBetween"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <div>Start (Column)</div>
    <div>End (Column)</div>
    <div>Center (Column)</div>
    <div>Space Between (Column)</div>
    <Stack
      direction="column"
      justifyContent="start"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="column"
      justifyContent="end"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="column"
      justifyContent="center"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
    <Stack
      direction="column"
      justifyContent="spaceBetween"
      style={{ border: '1px solid blue', borderRadius: 10, padding: 20 }}
    >
      <button>button</button>
      <div>
        hello
        <br />
        world
      </div>
      <span>span</span>
    </Stack>
  </div>
);
