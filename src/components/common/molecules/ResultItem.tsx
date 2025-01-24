import styled from "@emotion/styled";
import { FC, MouseEvent, MouseEventHandler } from "react";
import { Link } from "react-router";
import { AnimalResult } from "types";

const ResultItemContainer = styled('div')(({
  width: '100%',
  color: '#202124',
  fontSize: '14px',
  lineHeight: '20px'
}));

const ResultItemContent = styled('div')(({
  padding: '.3rem',
}));

const HeaderLink = styled(Link)(({
  color: '#202124',
  textDecoration: 'none',
  fontSize: '14px',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const ResultTitle = styled('h3')(({
  margin: 0,
  fontSize: '20px',
  fontWeight: 400,
  color: '#1a0dab'
}));

const ResultDescription = styled('p')(({
  marginTop: '.5rem',
  fontSize: '16px',
  color: '#3c4043'
}));

type ResultItemProps = AnimalResult & {
  onVisit: (page: AnimalResult) => void;
};

const ResultItem: FC<ResultItemProps> = ({ id, title, type, url, description, onVisit }) => {
  const domainName = new URL(url).hostname;

  const handleVisit: MouseEventHandler<HTMLAnchorElement> = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onVisit({ id, title, type, url, description } as AnimalResult);
  };

  return (
    <ResultItemContainer>
      <ResultItemContent>
        <HeaderLink onClick={handleVisit} to={`/results/${id}`}>
          <div>{domainName}</div>
          <ResultTitle>{title}</ResultTitle>
        </HeaderLink>
        <ResultDescription>{description}</ResultDescription>
      </ResultItemContent>
    </ResultItemContainer>
  );
};

export default ResultItem;