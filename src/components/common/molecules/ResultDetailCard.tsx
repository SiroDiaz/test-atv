import styled from "@emotion/styled";
import { FC } from "react";
import { Link } from "react-router";
import { AnimalResult } from "types";

const CardItem = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem',
  padding: '1rem',
  boxSizing: 'border-box',
  background: 'var(--bg-color)',
  border: '1px solid var(--neutral-color)',
  borderRadius: '8px',
  height: 'fit-content',
  width: '100%',
}));

const CardImage = styled('img')(({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
  background: 'var(--neutral-color)',
  minHeight: '193px',
}));

const CardContent = styled('div')(({
  '> a': {
    fontSize: '14px',
    color: '#202124',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '> h3': {
    margin: '0',
    padding: 0,
    fontSize: '18px',
    fontWeight: 600,
  },
  '> p': {
    margin: 0,
    fontSize: '16px',
  }
}));

type ResultDetailCardProps<T> = Omit<T, 'displayMode'> & {
  displayMode?: 'modal' | 'inline';
}

const ResultDetailCard: FC<ResultDetailCardProps<AnimalResult>> = ({ title, url, description, image }) => {
  const domainName = new URL(url).hostname;
  
  return (
    <CardItem>
      <CardImage src={image} alt={title} />
      <CardContent>
        <Link  target="_blank" rel="noopener noreferrer" to={url}>
          {domainName}
        </Link>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </CardItem>
  );
};

export default ResultDetailCard;