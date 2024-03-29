# Adventurers

## Create Next Project

```bash
npx create-next-app@latest adventurers --typescript --tailwind --eslint
```

- **`src/` directory**: No
- **App Router**: Yes
- **Default Import Alias**: Yes

## Push to Github

```bash
git remote add origin https://github.com/earth2travis/adventurers.git
git branch -M main
git push -u origin main
```

## Add shadcn-ui

```bash
npx shadcn-ui@latest init
```

- **Style**: New York
- **Color**: Slate
- **CSS Variables**: Yes

## Import Inter as FontSans

### Import font in `layout.tsx`

```ts
import { Inter as FontSans } from 'next/font/google';
```

```ts
import { cn } from '../lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
```

```html
<body className={cn( 'min-h-screen bg-background font-sans antialiased',
fontSans.variable )} >
```

### Configure `theme.extend.fontFamily` in `tailwind.config.js`

```ts
const { fontFamily } = require('tailwindcss/defaultTheme');
```

```ts
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
```

## Create Start Page

```bash
npx v0 add i0dnTdQjbuq
```

- Add `app/start` directory
- Move file to `app/start`
- Rename file `page.tsx`

## Add Button

```bash
npx shadcn-ui@latest add button
```

```tsx start/page.tsx
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
```

```html
      <div className="flex justify-center">
        <Link href="/start" className={buttonVariants({ variant: 'outline' })}>
          Create Character
        </Link>
      </div>
```

## Create Race Page

```bash
npx v0 add JSLQ5AldELH
```

- Add `app/race` directory
- Move file to `app/race`
- Rename file `page.tsx`

## Add Dropdown Menu

```bash
npx shadcn-ui@latest add dropdown-menu
```

```tsx race/page.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
```

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Race</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Human</DropdownMenuItem>
    <DropdownMenuItem>Half-Orc</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Configure Project on Vercel

- Import [adventurers](https://github.com/earth2travis/adventurers) Git Repository
- [https://adventurers.vercel.app/](https://adventurers.vercel.app/)
