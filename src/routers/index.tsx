import MainLayout from "@layouts/MainLayout";
import ResultsLayout from "@layouts/ResultsLayout";
import ErrorBoundary from "@pages/ErrorBoundary";
import { lazy } from "react";
import { Outlet, RouteObject } from "react-router";

const SearchPage = lazy(() => import('@pages/Search/page'));
const ResultsPage = lazy(() => import('@pages/Results/page'));

export const routes = [
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <SearchPage /> },
        ]
      },
      {
        path: "/search",
        element: <ResultsLayout />,
        children: [
          { path: "", element: <ResultsPage /> },
        ]
      },
    ]
  },
] satisfies RouteObject[];
