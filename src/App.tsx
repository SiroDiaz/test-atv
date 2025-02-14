import Providers from "./context/providers";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routers";

const App = () => {
  return (
    <Providers>
      <RouterProvider router={createBrowserRouter(routes)} />
    </Providers>
  );
};

export default App;
