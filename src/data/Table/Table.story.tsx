import React, { Fragment, useMemo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableExpandCell,
  TableFooter,
  TableHead,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableRowExpand
} from './';
import { SortDirection } from './TableHeaderCell';
import { Avatar } from '@/elements/Avatar';
import { Button } from '@/elements/Button';
import { Chip } from '@/elements/Chip';
import { Checkbox } from '@/form/Checkbox';
import { Pager } from '@/data/Pager';
import { cn } from '@/utils';
import {
  extendTheme,
  PartialReablocksTheme
} from '@/utils/Theme/themes/extendTheme';
import { ThemeProvider } from '@/utils/Theme/ThemeProvider';
import { theme as defaultTheme } from '@/utils/Theme/themes/theme';

export default {
  title: 'Components/Data/Table',
  component: Table
};

interface Person {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Pending' | 'Suspended';
  visits: number;
}

const people: Person[] = [
  {
    id: '1',
    name: 'Emma Stone',
    email: 'emma@example.com',
    role: 'Admin',
    status: 'Active',
    visits: 124
  },
  {
    id: '2',
    name: 'James Carter',
    email: 'james@example.com',
    role: 'Editor',
    status: 'Pending',
    visits: 42
  },
  {
    id: '3',
    name: 'Olivia Brooks',
    email: 'olivia@example.com',
    role: 'Viewer',
    status: 'Active',
    visits: 89
  },
  {
    id: '4',
    name: 'Liam Parker',
    email: 'liam@example.com',
    role: 'Admin',
    status: 'Suspended',
    visits: 11
  },
  {
    id: '5',
    name: 'Sophia Reed',
    email: 'sophia@example.com',
    role: 'Editor',
    status: 'Active',
    visits: 217
  }
];

export const Basic = () => (
  <Table>
    <TableHead>
      <TableHeaderRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell align="right">Visits</TableHeaderCell>
      </TableHeaderRow>
    </TableHead>
    <TableBody>
      {people.map(p => (
        <TableRow key={p.id}>
          <TableCell>{p.name}</TableCell>
          <TableCell minWidth={200}>{p.email}</TableCell>
          <TableCell>{p.role}</TableCell>
          <TableCell align="right">{p.visits}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Condensed = () => (
  <Table size="condensed">
    <TableHead>
      <TableHeaderRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell align="right">Visits</TableHeaderCell>
      </TableHeaderRow>
    </TableHead>
    <TableBody>
      {people.map(p => (
        <TableRow key={p.id}>
          <TableCell>{p.name}</TableCell>
          <TableCell minWidth={200}>{p.email}</TableCell>
          <TableCell>{p.role}</TableCell>
          <TableCell align="right">{p.visits}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Sortable = () => {
  const [sort, setSort] = useState<{
    field: keyof Person | null;
    direction: SortDirection;
  }>({ field: 'name', direction: 'asc' });

  const sorted = useMemo(() => {
    if (!sort.field || !sort.direction) return people;
    const field = sort.field;
    const direction = sort.direction;
    return [...people].sort((a, b) => {
      const av = a[field];
      const bv = b[field];
      if (typeof av === 'number' && typeof bv === 'number') {
        return direction === 'asc' ? av - bv : bv - av;
      }
      const cmp = String(av).localeCompare(String(bv));
      return direction === 'asc' ? cmp : -cmp;
    });
  }, [sort]);

  const headerProps = (field: keyof Person) => ({
    sortable: true,
    sortDirection: sort.field === field ? sort.direction : null,
    onSort: (next: SortDirection) => setSort({ field, direction: next })
  });

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell {...headerProps('name')}>Name</TableHeaderCell>
          <TableHeaderCell {...headerProps('email')} minWidth={200}>
            Email
          </TableHeaderCell>
          <TableHeaderCell {...headerProps('role')}>Role</TableHeaderCell>
          <TableHeaderCell align="right" {...headerProps('visits')}>
            Visits
          </TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {sorted.map(p => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell minWidth={200}>{p.email}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell align="right">{p.visits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Selection = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set(['1']));

  const toggle = (id: string) =>
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleAll = () =>
    setSelected(prev =>
      prev.size === people.length ? new Set() : new Set(people.map(p => p.id))
    );

  const allChecked = selected.size === people.length;
  const someChecked = selected.size > 0 && !allChecked;

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell width={72}>
            <Checkbox
              checked={allChecked || someChecked}
              intermediate={someChecked}
              onChange={toggleAll}
            />
          </TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {people.map(p => (
          <TableRow
            key={p.id}
            selected={selected.has(p.id)}
            onClick={() => toggle(p.id)}
          >
            <TableCell width={72}>
              <Checkbox
                checked={selected.has(p.id)}
                onChange={() => toggle(p.id)}
              />
            </TableCell>
            <TableCell>{p.name}</TableCell>
            <TableCell minWidth={200}>{p.email}</TableCell>
            <TableCell>{p.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const ArrowSortIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 14"
    className={cn(className, 'shrink-0 w-3.5 h-3.5')}
    aria-hidden="true"
  >
    <path
      d="M7 3V11M7 11L3.5 7.5M7 11L10.5 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const NeutralArrowSortIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 14"
    className={cn(className, 'shrink-0 opacity-30 w-3.5 h-3.5')}
    aria-hidden="true"
  >
    <path
      d="M7 2V12M7 2L4 5M7 2L10 5M7 12L4 9M7 12L10 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const Custom = () => {
  const [sort, setSort] = useState<{
    field: keyof Person | null;
    direction: SortDirection;
  }>({ field: 'name', direction: 'asc' });

  const sorted = useMemo(() => {
    if (!sort.field || !sort.direction) return people;
    const field = sort.field;
    const direction = sort.direction;
    return [...people].sort((a, b) => {
      const av = a[field];
      const bv = b[field];
      if (typeof av === 'number' && typeof bv === 'number') {
        return direction === 'asc' ? av - bv : bv - av;
      }
      const cmp = String(av).localeCompare(String(bv));
      return direction === 'asc' ? cmp : -cmp;
    });
  }, [sort]);

  const headerProps = (field: keyof Person) => ({
    sortable: true,
    sortDirection: sort.field === field ? sort.direction : null,
    onSort: (next: SortDirection) => setSort({ field, direction: next }),
    sortIcon: ArrowSortIcon,
    sortNeutralIcon: NeutralArrowSortIcon
  });

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell minWidth={200} {...headerProps('name')}>
            User
          </TableHeaderCell>
          <TableHeaderCell {...headerProps('role')}>Role</TableHeaderCell>
          <TableHeaderCell {...headerProps('status')}>Status</TableHeaderCell>
          <TableHeaderCell align="right">Actions</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {sorted.map(p => (
          <TableRow key={p.id}>
            <TableCell minWidth={200}>
              <div className="flex items-center gap-2">
                <Avatar name={p.name} size={32} />
                <div className="flex flex-col">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-xs text-text-secondary">{p.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>
              <Chip
                size="small"
                variant="outline"
                color={
                  p.status === 'Active'
                    ? 'success'
                    : p.status === 'Pending'
                      ? 'warning'
                      : 'error'
                }
              >
                {p.status}
              </Chip>
            </TableCell>
            <TableCell align="right">
              <Button size="small" variant="outline">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total users</TableCell>
          <TableCell align="right">{people.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const CustomTheme = () => {
  const customTheme: PartialReablocksTheme = {
    components: {
      table: {
        header: {
          row: 'bg-primary/20 border-b-0',
          cell: {
            base: 'font-bold uppercase tracking-wide whitespace-nowrap text-text-primary',
            sorted: 'text-primary'
          }
        },
        body: {
          row: {
            base: 'transition-colors border-b border-primary/15 last:border-b-0 hover:bg-primary/10',
            selected: 'bg-primary/15 hover:bg-primary/20'
          }
        }
      }
    }
  };

  return (
    <ThemeProvider theme={extendTheme(defaultTheme, customTheme)}>
      <Table className="rounded-lg overflow-hidden">
        <TableHead>
          <TableHeaderRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell align="right">Visits</TableHeaderCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {people.map(p => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.role}</TableCell>
              <TableCell align="right">{p.visits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export const Truncation = () => (
  <Table>
    <TableHead>
      <TableHeaderRow>
        <TableHeaderCell width={120}>Title</TableHeaderCell>
        <TableHeaderCell width={200}>Description</TableHeaderCell>
      </TableHeaderRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell width={120}>Spec</TableCell>
        <TableCell truncate width={200}>
          A very long description that should be truncated because there is no
          way it can fit inside this column without overflowing the table
          container.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell width={120}>Notes</TableCell>
        <TableCell truncate width={200}>
          Another lengthy paragraph that gets cut off cleanly with an ellipsis
          on the right-hand side instead of wrapping to a new line.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

type Col = {
  id: keyof Person;
  label: string;
  align?: 'left' | 'center' | 'right';
  minWidth?: number;
  render: (p: Person) => React.ReactNode;
};

const personColumns: Col[] = [
  { id: 'name', label: 'Name', minWidth: 200, render: p => p.name },
  { id: 'email', label: 'Email', minWidth: 240, render: p => p.email },
  { id: 'role', label: 'Role', minWidth: 120, render: p => p.role },
  { id: 'status', label: 'Status', minWidth: 120, render: p => p.status },
  {
    id: 'visits',
    label: 'Visits',
    align: 'right',
    minWidth: 100,
    render: p => p.visits
  }
];

export const ColumnReordering = () => {
  const [order, setOrder] = useState<Array<keyof Person>>(
    personColumns.map(c => c.id)
  );
  const [dragId, setDragId] = useState<keyof Person | null>(null);
  const cols = useMemo(
    () => order.map(id => personColumns.find(c => c.id === id)!),
    [order]
  );

  const handleDragStart = (id: keyof Person) => () => setDragId(id);
  const handleDragOver =
    (id: keyof Person) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!dragId || dragId === id) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const cursorRatio = (e.clientX - rect.left) / rect.width;

      setOrder(prev => {
        const from = prev.indexOf(dragId);
        const to = prev.indexOf(id);
        // Only swap once the cursor has crossed the target's midpoint in the
        // drag direction — prevents rapid oscillation while dragover fires.
        if (from < to && cursorRatio < 0.5) return prev;
        if (from > to && cursorRatio > 0.5) return prev;

        const next = [...prev];
        next.splice(from, 1);
        next.splice(to, 0, dragId);
        return next;
      });
    };
  const handleDragEnd = () => setDragId(null);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-text-secondary">
        Drag column headers to reorder. Headers highlight on hover.
      </p>
      <Table>
        <TableHead>
          <TableHeaderRow>
            {cols.map(c => (
              <TableHeaderCell
                key={c.id}
                align={c.align}
                minWidth={c.minWidth}
                draggable
                dragging={dragId === c.id}
                onDragStart={handleDragStart(c.id)}
                onDragOver={handleDragOver(c.id)}
                onDragEnd={handleDragEnd}
              >
                {c.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {people.map(p => (
            <TableRow key={p.id}>
              {cols.map(c => (
                <TableCell key={c.id} align={c.align} minWidth={c.minWidth}>
                  {c.render(p)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const ResizableColumns = () => {
  const initialWidths = useMemo(
    () => Object.fromEntries(personColumns.map(c => [c.id, c.minWidth ?? 160])),
    []
  );

  return (
    <div className="flex flex-col gap-2" style={{ width: 800 }}>
      <p className="text-xs text-text-secondary">
        Drag the right edge of any header cell to resize. The last column opts
        out via <code>resizable=&#123;false&#125;</code>.
      </p>
      <Table resizable defaultColumnWidths={initialWidths}>
        <TableHead>
          <TableHeaderRow>
            {personColumns.map((c, i) => (
              <TableHeaderCell
                key={c.id}
                columnId={c.id}
                align={c.align}
                truncate
                minWidth={60}
                resizable={i < personColumns.length - 1}
              >
                {c.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {people.map(p => (
            <TableRow key={p.id}>
              {personColumns.map(c => (
                <TableCell key={c.id} columnId={c.id} align={c.align} truncate>
                  {c.render(p)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const ExpandableRows = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(['1']));

  const toggle = (id: string) =>
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell width={40} />
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell align="right">Visits</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {people.map(p => {
          const isOpen = expanded.has(p.id);
          return (
            <Fragment key={p.id}>
              <TableRow
                selected={isOpen}
                onClick={() => toggle(p.id)}
                aria-expanded={isOpen}
                className={isOpen ? 'border-b-0!' : undefined}
              >
                <TableExpandCell open={isOpen} />
                <TableCell>{p.name}</TableCell>
                <TableCell minWidth={200}>{p.email}</TableCell>
                <TableCell>{p.role}</TableCell>
                <TableCell align="right">{p.visits}</TableCell>
              </TableRow>
              <TableRowExpand open={isOpen}>
                <div className="grid grid-cols-3 gap-4 text-xs p-3 bg-panel-accent/20">
                  <div>
                    <div className="text-text-secondary">Status</div>
                    <div className="font-medium">{p.status}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary">User ID</div>
                    <div className="font-medium">{p.id}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary">Last seen</div>
                    <div className="font-medium">
                      {p.visits} visit{p.visits === 1 ? '' : 's'}
                    </div>
                  </div>
                </div>
              </TableRowExpand>
            </Fragment>
          );
        })}
      </TableBody>
    </Table>
  );
};

export const HorizontalScroll = () => {
  type WidePerson = Person & {
    department: string;
    location: string;
    lastSeen: string;
    plan: string;
    joined: string;
  };
  const wide: WidePerson[] = people.map((p, i) => ({
    ...p,
    department: ['Engineering', 'Design', 'Sales', 'Marketing', 'Support'][i],
    location: ['Austin, TX', 'Berlin, DE', 'Tokyo, JP', 'Lisbon, PT', 'NYC'][i],
    lastSeen: ['2 min ago', '1 hr ago', 'Yesterday', '3 days ago', 'Just now'][
      i
    ],
    plan: ['Enterprise', 'Pro', 'Free', 'Pro', 'Enterprise'][i],
    joined: [
      '2021-03-14',
      '2022-08-02',
      '2020-01-29',
      '2023-06-11',
      '2019-11-04'
    ][i]
  }));

  return (
    <Table style={{ maxWidth: 700 }}>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell width={160}>Name</TableHeaderCell>
          <TableHeaderCell width={220}>Email</TableHeaderCell>
          <TableHeaderCell width={110}>Role</TableHeaderCell>
          <TableHeaderCell width={110}>Status</TableHeaderCell>
          <TableHeaderCell width={140}>Department</TableHeaderCell>
          <TableHeaderCell width={140}>Location</TableHeaderCell>
          <TableHeaderCell width={120}>Plan</TableHeaderCell>
          <TableHeaderCell width={130}>Last seen</TableHeaderCell>
          <TableHeaderCell width={130}>Joined</TableHeaderCell>
          <TableHeaderCell width={90} align="right">
            Visits
          </TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {wide.map(p => (
          <TableRow key={p.id}>
            <TableCell width={160}>{p.name}</TableCell>
            <TableCell width={220}>{p.email}</TableCell>
            <TableCell width={110}>{p.role}</TableCell>
            <TableCell width={110}>{p.status}</TableCell>
            <TableCell width={140}>{p.department}</TableCell>
            <TableCell width={140}>{p.location}</TableCell>
            <TableCell width={120}>{p.plan}</TableCell>
            <TableCell width={130}>{p.lastSeen}</TableCell>
            <TableCell width={130}>{p.joined}</TableCell>
            <TableCell width={90} align="right">
              {p.visits}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const VerticalScroll = () => {
  const firstNames = [
    'Emma',
    'James',
    'Olivia',
    'Liam',
    'Sophia',
    'Noah',
    'Ava',
    'Mason',
    'Isabella',
    'Lucas',
    'Mia',
    'Ethan',
    'Charlotte',
    'Logan',
    'Amelia'
  ];
  const lastNames = [
    'Stone',
    'Carter',
    'Brooks',
    'Parker',
    'Reed',
    'Bennett',
    'Hayes',
    'Foster',
    'Morgan',
    'Cooper'
  ];
  const roles = ['Admin', 'Editor', 'Viewer'] as const;
  const statuses: Person['status'][] = ['Active', 'Pending', 'Suspended'];
  const many: Person[] = Array.from({ length: 40 }, (_, i) => ({
    id: String(i + 1),
    name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
    email: `${firstNames[i % firstNames.length].toLowerCase()}.${lastNames[i % lastNames.length].toLowerCase()}@example.com`,
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    visits: 10 + ((i * 37) % 250)
  }));

  return (
    <Table style={{ height: 360 }}>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell align="right">Visits</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {many.map(p => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell minWidth={200}>{p.email}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.status}</TableCell>
            <TableCell align="right">{p.visits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const Pagination = () => {
  const firstNames = [
    'Emma',
    'James',
    'Olivia',
    'Liam',
    'Sophia',
    'Noah',
    'Ava',
    'Mason',
    'Isabella',
    'Lucas',
    'Mia',
    'Ethan',
    'Charlotte',
    'Logan',
    'Amelia'
  ];
  const lastNames = [
    'Stone',
    'Carter',
    'Brooks',
    'Parker',
    'Reed',
    'Bennett',
    'Hayes',
    'Foster',
    'Morgan',
    'Cooper'
  ];
  const roles = ['Admin', 'Editor', 'Viewer'] as const;
  const statuses: Person['status'][] = ['Active', 'Pending', 'Suspended'];
  const all: Person[] = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: String(i + 1),
        name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
        email: `${firstNames[i % firstNames.length].toLowerCase()}.${lastNames[i % lastNames.length].toLowerCase()}@example.com`,
        role: roles[i % roles.length],
        status: statuses[i % statuses.length],
        visits: 10 + ((i * 37) % 250)
      })),
    []
  );

  const pageSize = 8;
  const [page, setPage] = useState(0);
  const pageData = useMemo(
    () => all.slice(page * pageSize, page * pageSize + pageSize),
    [all, page]
  );

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell minWidth={200}>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell align="right">Visits</TableHeaderCell>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {pageData.map(p => (
          <TableRow key={p.id}>
            <TableCell>{p.name}</TableCell>
            <TableCell minWidth={200}>{p.email}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.status}</TableCell>
            <TableCell align="right">{p.visits}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <div className="flex justify-end p-3">
          <Pager
            page={page}
            size={pageSize}
            total={all.length}
            onPageChange={setPage}
            displayMode="pages"
          />
        </div>
      </TableFooter>
    </Table>
  );
};

export const DisabledRow = () => (
  <Table>
    <TableHead>
      <TableHeaderRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
      </TableHeaderRow>
    </TableHead>
    <TableBody>
      {people.map(p => (
        <TableRow
          key={p.id}
          disabled={p.status === 'Suspended'}
          onClick={() => undefined}
        >
          <TableCell>{p.name}</TableCell>
          <TableCell>{p.role}</TableCell>
          <TableCell>{p.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
