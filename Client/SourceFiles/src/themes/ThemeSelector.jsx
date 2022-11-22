import React from 'react';

/**
 * The theme components only imports it's theme CSS-file. These components are lazy
 * loaded, to enable "code splitting" (in order to avoid the themes being bundled together)
 */
const DarkTheme = React.lazy(() => import('./DarkTheme'));
const LightTheme = React.lazy(() => import('./LightTheme'));

const ThemeSelector = ({ children }) => (
  <>
    {/* Conditionally render theme, based on the current client context */}
    <React.Suspense fallback={() => null}>
      {localStorage.getItem('theme') === 'dark' && <DarkTheme />}
      {localStorage.getItem('theme') !== 'dark' && <LightTheme />}
    </React.Suspense>
    {/* Render children immediately! */}
    {children}
  </>
);

export default ThemeSelector;
