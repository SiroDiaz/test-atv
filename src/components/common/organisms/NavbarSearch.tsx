import { MdApps as AppsIcon, MdSearch as SearchIcon } from "react-icons/md";

import { RxAvatar as AvatarIcon } from "react-icons/rx";
import SearchInput from "../molecules/SearchInput";
import { Link, useNavigate, useSearchParams } from "react-router";
import { ChangeEvent, useRef, useState } from "react";
import logo from "@assets/google-logo.svg";
import { NavAccount, NavbarHeaderBordered, NavBrandSearch, NavContent } from "./internal";
import styled from "@emotion/styled";
import { IconButtonRounded } from "@components/common/atoms/IconButton";

const MAX_WIDTH_SEARCH_BOX_CONTAINER_PX = 658;

const NavbarSearchFormContainer = styled('div')(({
  maxWidth: MAX_WIDTH_SEARCH_BOX_CONTAINER_PX,
  flex: 1,
}));

const LogoImage = styled('img')(({
  userSelect: 'none',
}))

const NavbarSearch = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryParams = new URLSearchParams(searchParams);
  const [term, setTerm] = useState<string>(queryParams.get("q") || "");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchParams.set("q", term);
    if (searchInputRef.current) navigate(`/search?q=${searchInputRef.current!.value}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  return (
    <NavbarHeaderBordered>
      <NavContent>
        <NavBrandSearch>
          <Link to="/">
            <LogoImage src={logo} width={92} height={30} alt="logo" />
          </Link>
          <NavbarSearchFormContainer>
            <form onSubmit={handleSubmit} data-testid="search-form">
              <SearchInput
                ref={searchInputRef}
                data-testid="search-form-input"
                icon={<SearchIcon size={20} />}
                defaultValue={term}
                type="text"
                onChange={handleChange}
              />
            </form>
          </NavbarSearchFormContainer>
        </NavBrandSearch>
        <NavAccount>
          <IconButtonRounded>
            <AppsIcon size={24} />
          </IconButtonRounded>
          <IconButtonRounded>
            <AvatarIcon size={24} />
          </IconButtonRounded>
        </NavAccount>
      </NavContent>
    </NavbarHeaderBordered>
  );
};

export default NavbarSearch;
