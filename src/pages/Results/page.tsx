import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router";
import indexer from "data/indexer";
import { waitFor } from "@utils/promises";
import { SearchResult } from "minisearch";
import SearchResults from "@components/common/templates/SearchResults";
import ResultSkeletonItem from "@components/common/molecules/ResultSkeletonItem";
import SearchResultsNotFound from "@components/common/templates/SearchResultsNotFound";
import { AnimalResult } from "types";
import styled from "@emotion/styled";

const RESULTS_MAX_WIDTH_MAIN_CONTAINER_PX = 1140;
const RESULTS_MAX_WIDTH_CONTAINER_PX = 652;

const ResultsSection = styled('section')(({
  maxWidth: RESULTS_MAX_WIDTH_MAIN_CONTAINER_PX,
  width: '100%',
  margin: ['0', 'auto'],
  padding: '1rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  "@media screen and (min-width: 857px)": {
    marginLeft: 0,
    paddingLeft: 94,
  }
}));

const ResultSkeletonContainer = styled('div')(({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: RESULTS_MAX_WIDTH_CONTAINER_PX,
}));

const getResultsItems = (hits: SearchResult[]): AnimalResult[] => {
  return hits.map((hit) => {
    const { id, type, url, title, description, image } = hit;
    return {
      id,
      type,
      url,
      title,
      description,
      image,
    };
  });
};

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const [results, setResults] = useState<AnimalResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>();

  const handleSearch = (term : string) => {
    if (term.trim().length === 0) {
      setResults([]);
      return;
    }
    
    setLoading(true);
    waitFor(1000)
      .then(() => {
        const hits = indexer.search(term, { boost: { title: 3, type: 2 }, prefix: true,});
        setResults(getResultsItems(hits));
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    handleSearch(queryParams.get("q") || "");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <ResultsSection>
      {loading && (
        <ResultSkeletonContainer>
          {Array.from({ length: 5 })
            .map((_, index) => <ResultSkeletonItem key={index} />)
          }
        </ResultSkeletonContainer>)}
      {error && <p>{error.message}</p>}
      {!loading && results.length > 0 && <SearchResults hits={results} />}
      {!loading && results.length === 0 && (
        <SearchResultsNotFound
          cause={queryParams.get("q")?.trim().length === 0 ? 'RESULT_NO_TERM_INPUT' : 'RESULT_EMPTY_HITS'}
          query={queryParams.get("q") || ""}
        />
      )}
    </ResultsSection>
  );
};

export default ResultsPage;
