import { render } from "@testing-library/react";
import { createMemoryRouter, RouteObject, RouterProvider } from "react-router";

export const setupRouter = (routes: RouteObject[], options: Record<string, unknown> = {}) => {
  const router = createMemoryRouter(
    routes,
    options,
  );

  const { container } = render(<RouterProvider router={router} />);

  return { router, container };
};
