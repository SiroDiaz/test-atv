import { expect, test, describe } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { routes } from "@routers/index";
import { setupRouter } from "../setupRouter";

describe("Search Page from Home page", () => {
  test("should render the search page", async () => {
    const { router } = setupRouter(routes, {
      initialEntries: ['/', '/search'],
      initialIndex: 0,
    });

    expect(router.state.location.pathname).toEqual('/');

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/');
    });

    await userEvent.type(await screen.findByTestId('search-input'), 'cat');
    await userEvent.click(await screen.findByRole('search'));

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/search');
      expect(router.state.location.search).toEqual('?q=cat');
    });
  });
});
