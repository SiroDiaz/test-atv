import { ThemeProvider } from "@emotion/react";
import { FC, ReactNode } from "react";
import theme from "themes/agile-content";
/**
 * @fileoverview Context Providers
 * @author Siro Díaz
 * 
 * This file contains all application providers, which is used to wrap the entire application.
 * Order matters here.
 */

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Providers;
