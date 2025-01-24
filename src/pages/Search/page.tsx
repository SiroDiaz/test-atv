import { useRef } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import SearchInput from "@components/common/molecules/SearchInput";
import logo from "@assets/google-logo.svg";
import { MdSearch as SearchIcon } from "react-icons/md";

const Logo = styled('img')(({
  userSelect: 'none',
}))

const SearchFormContainer = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '20px',
  boxSizing: 'border-box',
  maxWidth: '584px',
  width: '100%',
}));

const SearchForm = styled('form')(({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '20px',
  boxSizing: 'border-box',
  width: '100%'
}));

const SearchButton = styled('button')(({
  backgroundColor: 'var(--btn-neutral-bg)',
  border: '1px solid var(--btn-neutral-bg)',
  borderRadius: '4px',
  color: '#3c4043',
  padding: ['6px', '12px'],
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
  lineHeight: '27px',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover': {
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dadce0',
    color: '#202124',
  }
}));

const SearchPage = () => {
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current!.value;
    if (searchTerm.trim().length === 0) return;
    const searchParam = new URLSearchParams();
    searchParam.set("q", searchTerm);
    navigate(`/search?${searchParam.toString()}`);
  };

  return (
    <>
      <Logo src={logo} alt="Google logo" />
      <SearchFormContainer>
        <SearchForm onSubmit={handleSubmit} data-testid="search-form">
          <SearchInput
            data-testid="search-input"
            icon={<SearchIcon size={20} />}
            ref={searchInputRef} type="text"
          />
          <SearchButton role="search">
            Buscar
          </SearchButton>
        </SearchForm>
      </SearchFormContainer>
    </>
  );
};

export default SearchPage;
