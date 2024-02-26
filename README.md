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
