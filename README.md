# Test para Agile Content

### Applicative tech stack
 - React
 - TypeScript
 - Vite
 - React Router 7 (as lib)
 - Vitest (test runner) + React Testing Library
 - Emotion (styled components)
 - 

### Pending tasks
  - [x] Setup react-router@7
  - [x] Setup vitest for React testing
  - [x] Testing use cases
    - [x] test search from homepage
    - [ ] test results from "Results" page
      - [x] test empty query/term
      - [x] test no results
      - [x] test skeletons
      - [x] test results
      - [ ] test show result card with image
  - [ ] Add more reusable SearchInput
  - [x] Add simple search engine for improve performance and query results
  - [x] Integrate styled components with Emotion React
  - [x] Simple error boundary component
  - [ ] Add react-error-boundary for unexpected errors/exceptions
  - [ ] App error tracking (Sentry, for example)
  - [ ] Configure modular router
  - [ ] theme system (Need more specification about this google clone DS)
  - [ ] setup Turborepo and tsup (esbuild)
    - [ ] @agilecontent/utils, @agilecontent/ui, ...
