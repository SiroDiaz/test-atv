import { expect, test, describe, vi } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { routes } from "@routers/index";
import { setupRouter } from "__tests__/setupRouter";

describe("Search Page from Results page", () => {
  test("should render the results page", async () => {
    const { router } = setupRouter(routes, {
      initialEntries: ['/search?q=cat'],
    });

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/search');
      expect(router.state.location.search).toEqual('?q=cat');
    });

    await userEvent.clear(await screen.findByTestId('search-form-input'));
    await userEvent.type(await screen.findByTestId('search-form-input'), 'dog');
    
    await waitFor(async () => {
      (await screen.findByTestId('search-form')).onsubmit = vi.fn();
      
      fireEvent(await screen.findByTestId('search-form'), new SubmitEvent('submit', {
        bubbles: true,
        cancelable: true,
      }));

      expect((await screen.findByTestId('search-form')).onsubmit).toHaveBeenCalled();
      expect((await screen.findByTestId('search-form')).onsubmit).toHaveBeenCalledTimes(1);
      
      fireEvent.keyDown(await screen.findByTestId('search-form-input'), {key: 'Enter', code: 'Enter', charCode: 13});
      
      expect(router.state.location.search).toEqual('?q=dog');
    });
  });

  test("should render the results page with a message when there is an empty query", async () => {
    const { router } = setupRouter(routes, {
      initialEntries: ['/search?q='],
    });

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/search');
      expect(router.state.location.search).toEqual('?q=');
      expect(screen.getByText(/^Try looking for/)).toBeInTheDocument();
    });
  });

  test("should render the results page with a message when there are no results", async () => {
    const { router } = setupRouter(routes, {
      initialEntries: ['/search?q=xxxx'],
    });

    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/search');
      expect(router.state.location.search).toEqual('?q=xxxx');
      expect(screen.getByText(/^Try looking for/)).toBeInTheDocument();
      expect(screen.getByText(/^No results found for/)).toBeInTheDocument();
      expect(screen.getByText(/xxxx/)).toBeInTheDocument();
    });
  });

  test("should render the skeletons during the search loading", async () => {
    const { container } = setupRouter(routes, {
      initialEntries: ['/search?q=cat'],
    });

    expect(container.querySelectorAll('main svg')).toHaveLength(5);
  });

  test("should render the results when there are hits", async () => {
    const { container } = setupRouter(routes, {
      initialEntries: ['/search?q=cat'],
    });

    await waitFor(() => {
      expect(container.querySelectorAll('main svg')).toHaveLength(0);
      expect(container.querySelectorAll('main h3').length).toBeGreaterThan(0);
    });
  });
});
