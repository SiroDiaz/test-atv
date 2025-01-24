import { FC, useState } from "react";
import ResultItem from "../molecules/ResultItem";
import { AnimalResult } from "types";
import ResultDetailCard from "../molecules/ResultDetailCard";
import styled from "@emotion/styled";

const RESULTS_MAX_WIDTH_CONTAINER_PX = 652;

const ResultsContainer = styled('div')(({
  display: 'flex',
}));

const ResultsSection = styled('section')(({
  display: 'flex',
  position: 'sticky',
  top: 0,
  overflow: 'auto',
  flexDirection: 'column',
  gap: '0.5rem',
  flexGrow: 0,
  height: '100%',
  maxWidth: RESULTS_MAX_WIDTH_CONTAINER_PX,
}));

interface SearchResultProps {
  hits: AnimalResult[];
}

const SearchResults: FC<SearchResultProps> = ({hits}) => {
  const [selectedPage, setSelectedPage] = useState<AnimalResult>();

  const handleVisit = (page: AnimalResult) => {
    setSelectedPage(page);
  };

  return (
    <ResultsContainer>
      <ResultsSection>
        {hits.map((result) => (
          <ResultItem key={result.id} {...result} onVisit={() => handleVisit(result)} />
        ))}
      </ResultsSection>

      {selectedPage && <ResultDetailCard {...selectedPage} />}
    </ResultsContainer>
  );
};

export default SearchResults;
