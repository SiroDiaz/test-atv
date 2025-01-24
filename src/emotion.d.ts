import '@emotion/react'
import type { Theme as AgileContentTheme } from './themes/agile-content';

declare module '@emotion/react' {
  export type Theme = AgileContentTheme;
}
