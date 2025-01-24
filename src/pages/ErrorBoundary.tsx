import { FC } from "react";
import { useNavigate, useRouteError } from "react-router";

const ErrorBoundary: FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p><strong>{error?.name}:</strong> {error?.message}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ErrorBoundary;