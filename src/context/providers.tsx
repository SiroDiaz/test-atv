/**
 * @fileoverview Context Providers
 * @author Siro Díaz
 * 
 * This file contains all application providers, which is used to wrap the entire application.
 * Order matters here.
 */
import { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => (
  <>{children}</>
);

export default Providers;
