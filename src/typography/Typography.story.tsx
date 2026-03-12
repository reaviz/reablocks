import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { P } from './P';
import { BlockQuote } from './BlockQuote';
import { Lead } from './Lead';
import { Large } from './Large';
import { Small } from './Small';
import { Muted } from './Muted';

export default {
  title: 'Components/Typography/Typography',
  component: H1
};

export const Headings = () => (
  <div className="flex flex-col gap-4">
    <H1>This is an H1 Heading</H1>
    <H2>This is an H2 Heading</H2>
    <H3>This is an H3 Heading</H3>
    <H4>This is an H4 Heading</H4>
  </div>
);

export const Paragraph = () => (
  <div>
    <P>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </P>
    <P>
      The people of the kingdom once again could freely exchange jokes and
      laughter, and the land was filled with joy and mirth.
    </P>
  </div>
);

export const BlockQuoteExample = () => (
  <BlockQuote>
    "After all," he said, "everyone enjoys a good joke, so it's only fair that
    they should pay for the privilege."
  </BlockQuote>
);

export const LeadText = () => (
  <Lead>
    A modal dialog that interrupts the user with important content and expects a
    response.
  </Lead>
);

export const LargeText = () => <Large>Are you absolutely sure?</Large>;

export const SmallText = () => <Small>Email address</Small>;

export const MutedText = () => <Muted>Enter your email address.</Muted>;

export const All = () => (
  <div className="max-w-2xl">
    <H1>The Joke Tax Chronicles</H1>
    <Lead>
      Once upon a time, in a far-off land, there was a very lazy king who spent
      all day lounging on his throne.
    </Lead>
    <H2>The People of the Kingdom</H2>
    <P>
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </P>
    <BlockQuote>
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </BlockQuote>
    <H3>The Joke Tax</H3>
    <P>
      The king's subjects were not amused. They grumbled and groaned, but the
      king was firm in his decision. Anyone caught telling a joke without paying
      the tax would be thrown into the dungeon.
    </P>
    <H4>People stopped telling jokes</H4>
    <P>
      The people of the kingdom realized that the joke tax was not just unfair,
      but it was also very poorly thought out. After all, what constitutes a
      joke?
    </P>
    <Large>Are you absolutely sure?</Large>
    <P>
      This action cannot be undone. This will permanently delete your account and
      remove your data from our servers.
    </P>
    <Small>Email address</Small>
    <Muted>Enter your email address.</Muted>
  </div>
);
