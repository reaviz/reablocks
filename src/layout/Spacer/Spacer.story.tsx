import React from 'react';
import { Spacer } from './Spacer';

export default {
  title: 'Components/Layout/Spacer',
  components: Spacer
};

export const Simple = () => (
  <Spacer>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Spacer>
);

export const Dense = () => (
  <Spacer dense>
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Spacer>
);

export const Columns = () => (
  <Spacer direction="column">
    <button>Button</button>
    <div>div</div>
    <span>span</span>
  </Spacer>
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
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <div>Start (Column)</div>
    <div>End (Column)</div>
    <div>Center (Column)</div>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
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
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <div>Start (Column)</div>
    <div>End (Column)</div>
    <div>Center (Column)</div>
    <div>Space Between (Column)</div>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
    <Spacer
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
    </Spacer>
  </div>
);
