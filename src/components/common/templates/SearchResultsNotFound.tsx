import { FC } from "react";
import { ResultErrorType } from "types";

interface SearchResultsNotFoundProps {
  cause: ResultErrorType;
  query: string;
}

const SearchResultsNotFound: FC<SearchResultsNotFoundProps> = ({ cause, query }) => {
  return (
    <div>
      {cause === 'RESULT_EMPTY_HITS' && (
        <p>
          No results found for: '<strong>{query}</strong>'
        </p>
      )}
      <p>
        Try looking for: <strong>insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
          rabbit, cat, snake, dog, bird.</strong>
      </p>
    </div>
  )
};

export default SearchResultsNotFound;
