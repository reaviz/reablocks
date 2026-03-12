import { writeFileSync } from 'fs';

const res = await fetch('http://localhost:6006/index.json');
const data = await res.json();
const stories = Object.values(data.entries)
  .filter(e => e.type === 'story')
  .map(({ id, title, name }) => ({ id, title, name }));

writeFileSync('visual-tests/stories.json', JSON.stringify(stories, null, 2));
console.log(`${stories.length} stories extracted`);
