import React, { useEffect } from 'react';
import { Button } from '@/elements/Button';
import { Input } from '@/form/Input';
import { Card } from '@/layout/Card';
import { Chip } from '@/elements/Chip';
import { Badge } from '@/elements/Badge';
import { Divider } from '@/layout/Divider';
import { Toggle } from '@/form/Toggle';
import { createUnifyAdapter } from './index';

export default {
  title: 'Components/Adapters/Unify'
};

/**
 * Decorator that injects Unify tokens + adapter at runtime for demo purposes.
 * In a real app, you'd import the CSS files statically.
 */
function UnifyDemoWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-unify-demo-tokens', '');
    // Inject a subset of Unify dark theme tokens for demo
    style.textContent = `
      :root {
        /* Unify root primitives */
        --color-color-purple-brand-primary-a-1000: #5f61ff;
        --color-color-purple-brand-primary-a-900: #5f61ffcc;
        --color-color-purple-brand-primary-a-700: #5f61ff99;
        --color-color-purple-brand-primary-a-500: #5f61ff66;
        --color-color-purple-brand-primary-a-400: #5f61ff4d;
        --color-color-purple-brand-primary-a-300: #5f61ff33;
        --color-color-purple-brand-primary-a-200: #5f61ff1f;
        --color-color-purple-brand-primary-a-100: #5f61ff14;
        --color-color-purple-brand-primary-a-50: #5f61ff0a;
        --color-neutrals-kyber-crystal-a-1000: #e1e2e3;
        --color-neutrals-kyber-crystal-a-900: #e1e2e3cc;
        --color-neutrals-kyber-crystal-a-800: #e1e2e3b2;
        --color-neutrals-kyber-crystal-a-600: #e1e2e380;
        --color-neutrals-kyber-crystal-a-500: #e1e2e366;
        --color-neutrals-kyber-crystal-a-400: #e1e2e34d;
        --color-neutrals-kyber-crystal-a-300: #e1e2e333;
        --color-neutrals-kyber-crystal-a-200: #e1e2e31f;
        --color-neutrals-kyber-crystal-a-100: #e1e2e314;
        --color-neutrals-kyber-crystal-a-50: #e1e2e30a;
        --color-neutrals-darth-abyss-a-1000: #1a1a1a;
        --color-neutrals-darth-abyss-a-900: #1a1a1acc;
        --color-neutrals-darth-abyss-a-600: #1a1a1a80;
        --color-neutrals-darth-abyss-a-400: #1a1a1a4d;
        --color-neutrals-darth-abyss-a-300: #1a1a1a33;
        --color-neutrals-darth-abyss-a-200: #1a1a1a1f;
        --color-neutrals-darth-abyss-a-100: #1a1a1a14;
        --color-neutrals-darth-abyss-a-50: #1a1a1a0a;
        --color-color-green-emerald-saber-a-1000: #00c46f;
        --color-color-green-emerald-saber-a-900: #00c46fcc;
        --color-color-green-emerald-saber-a-700: #00c46f99;
        --color-color-green-emerald-saber-a-500: #00c46f66;
        --color-color-green-emerald-saber-a-400: #00c46f4d;
        --color-color-green-emerald-saber-a-100: #00c46f14;
        --color-color-red-secondary-red-a-1000: #ff9371;
        --color-color-red-secondary-red-a-900: #ff9371cc;
        --color-color-red-secondary-red-a-700: #ff937199;
        --color-color-red-secondary-red-a-500: #ff937166;
        --color-color-red-secondary-red-a-400: #ff93714d;
        --color-color-red-secondary-red-a-100: #ff937114;
        --color-color-orange-secondary-orange-a-1000: #ffc06c;
        --color-color-orange-secondary-orange-a-900: #ffc06ccc;
        --color-color-orange-secondary-orange-a-700: #ffc06c99;
        --color-color-orange-secondary-orange-a-500: #ffc06c66;
        --color-color-orange-secondary-orange-a-400: #ffc06c4d;
        --color-color-orange-secondary-orange-a-100: #ffc06c14;
        --color-color-blue-secondary-blue-a-1000: #76d2ff;
        --color-color-blue-secondary-blue-a-900: #76d2ffcc;
        --color-color-blue-secondary-blue-a-700: #76d2ff99;
        --color-color-blue-secondary-blue-a-500: #76d2ff66;
        --color-color-blue-secondary-blue-a-400: #76d2ff4d;
        --color-color-blue-secondary-blue-a-100: #76d2ff14;
        --color-neutrals-pure-black-dnt-1000: #000000;
        --color-neutrals-pure-white-dnt-1000: #ffffff;
        --color-neutrals-clear-dnt-clear: #ffffff00;

        /* Unify dark semantic tokens */
        --color-background-brand-base: var(--color-color-purple-brand-primary-a-1000);
        --color-background-brand-1: var(--color-color-purple-brand-primary-a-900);
        --color-background-brand-2: var(--color-color-purple-brand-primary-a-700);
        --color-background-brand-3: var(--color-color-purple-brand-primary-a-500);
        --color-background-brand-5: var(--color-color-purple-brand-primary-a-200);
        --color-background-neutral-canvas-base: var(--color-neutrals-darth-abyss-a-1000);
        --color-background-neutral-raised-base: var(--color-neutrals-kyber-crystal-a-1000);
        --color-background-neutral-raised-1: var(--color-neutrals-kyber-crystal-a-900);
        --color-background-neutral-raised-2: var(--color-neutrals-kyber-crystal-a-600);
        --color-background-neutral-raised-3: var(--color-neutrals-kyber-crystal-a-400);
        --color-background-neutral-raised-4: var(--color-neutrals-kyber-crystal-a-300);
        --color-background-neutral-raised-5: var(--color-neutrals-kyber-crystal-a-100);
        --color-background-semantic-success-base: var(--color-color-green-emerald-saber-a-1000);
        --color-background-semantic-success-1: var(--color-color-green-emerald-saber-a-900);
        --color-background-semantic-success-5: var(--color-color-green-emerald-saber-a-100);
        --color-background-semantic-error-base: var(--color-color-red-secondary-red-a-1000);
        --color-background-semantic-error-1: var(--color-color-red-secondary-red-a-900);
        --color-background-semantic-error-5: var(--color-color-red-secondary-red-a-100);
        --color-background-semantic-warning-base: var(--color-color-orange-secondary-orange-a-1000);
        --color-background-semantic-warning-1: var(--color-color-orange-secondary-orange-a-900);
        --color-background-semantic-warning-5: var(--color-color-orange-secondary-orange-a-100);
        --color-background-semantic-info-base: var(--color-color-blue-secondary-blue-a-1000);
        --color-background-semantic-info-1: var(--color-color-blue-secondary-blue-a-900);
        --color-background-semantic-info-5: var(--color-color-blue-secondary-blue-a-100);
        --color-content-text-neutral-base: var(--color-neutrals-kyber-crystal-a-1000);
        --color-content-text-neutral-3: var(--color-neutrals-kyber-crystal-a-600);
      }
    `;
    document.head.appendChild(style);

    const cleanup = createUnifyAdapter();

    return () => {
      cleanup();
      style.remove();
    };
  }, []);

  return <>{children}</>;
}

export const ButtonShowcase = () => (
  <UnifyDemoWrapper>
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-lg font-semibold text-text-primary">
        Buttons with Unify Tokens
      </h3>
      <div className="flex gap-2">
        <Button color="primary" variant="filled">
          Primary Filled
        </Button>
        <Button color="secondary" variant="filled">
          Secondary Filled
        </Button>
        <Button color="success" variant="filled">
          Success
        </Button>
        <Button color="warning" variant="filled">
          Warning
        </Button>
        <Button color="error" variant="filled">
          Error
        </Button>
      </div>
      <div className="flex gap-2">
        <Button color="primary" variant="outline">
          Primary Outline
        </Button>
        <Button color="secondary" variant="outline">
          Secondary Outline
        </Button>
      </div>
      <div className="flex gap-2">
        <Button color="primary" variant="text">
          Primary Text
        </Button>
        <Button color="error" variant="text">
          Error Text
        </Button>
      </div>
    </div>
  </UnifyDemoWrapper>
);

export const FormShowcase = () => (
  <UnifyDemoWrapper>
    <div className="flex flex-col gap-4 p-4 max-w-md">
      <h3 className="text-lg font-semibold text-text-primary">
        Form Controls with Unify Tokens
      </h3>
      <Input placeholder="Enter your email..." />
      <Input placeholder="Disabled input" disabled />
      <div className="flex items-center gap-2">
        <Toggle checked={false} onChange={() => {}} />
        <span className="text-text-primary">Enable notifications</span>
      </div>
    </div>
  </UnifyDemoWrapper>
);

export const CardShowcase = () => (
  <UnifyDemoWrapper>
    <div className="flex flex-col gap-4 p-4 max-w-md">
      <h3 className="text-lg font-semibold text-text-primary">
        Cards with Unify Tokens
      </h3>
      <Card>
        <div className="p-4">
          <h4 className="text-base font-semibold text-text-primary mb-2">
            Card Title
          </h4>
          <p className="text-text-secondary text-sm">
            This card uses Unify design tokens via the adapter.
          </p>
          <Divider />
          <div className="flex gap-2 mt-2">
            <Chip>Tag 1</Chip>
            <Chip>Tag 2</Chip>
            <Badge>New</Badge>
          </div>
        </div>
      </Card>
    </div>
  </UnifyDemoWrapper>
);

export const FullDemo = () => (
  <UnifyDemoWrapper>
    <div className="flex flex-col gap-6 p-6 bg-panel min-h-screen">
      <div>
        <h2 className="text-xl font-bold text-text-primary mb-1">
          Unify Design System Adapter Demo
        </h2>
        <p className="text-text-secondary text-sm">
          All components below are styled using Unify design tokens mapped
          through the reablocks adapter.
        </p>
      </div>

      <Divider />

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-text-primary">Buttons</h3>
        <div className="flex flex-wrap gap-2">
          <Button color="primary" variant="filled">
            Primary
          </Button>
          <Button color="secondary" variant="filled">
            Secondary
          </Button>
          <Button color="success" variant="filled">
            Success
          </Button>
          <Button color="warning" variant="filled">
            Warning
          </Button>
          <Button color="error" variant="filled">
            Error
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-text-primary">Form</h3>
        <div className="max-w-sm flex flex-col gap-3">
          <Input placeholder="Email address" />
          <Input placeholder="Password" type="password" />
          <Button color="primary" variant="filled" fullWidth>
            Sign In
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-text-primary">Cards</h3>
        <div className="flex gap-4">
          <Card className="flex-1">
            <div className="p-4">
              <h4 className="text-base font-semibold text-text-primary">
                Feature One
              </h4>
              <p className="text-sm text-text-secondary mt-1">
                A description of this feature using Unify tokens.
              </p>
            </div>
          </Card>
          <Card className="flex-1">
            <div className="p-4">
              <h4 className="text-base font-semibold text-text-primary">
                Feature Two
              </h4>
              <p className="text-sm text-text-secondary mt-1">
                Another feature card with consistent styling.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-text-primary">Elements</h3>
        <div className="flex gap-2 items-center">
          <Chip>Chip</Chip>
          <Badge>Badge</Badge>
          <Toggle checked={false} onChange={() => {}} />
        </div>
      </div>
    </div>
  </UnifyDemoWrapper>
);
