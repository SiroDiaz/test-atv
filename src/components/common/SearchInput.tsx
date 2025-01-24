import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes, type JSX } from "react";

type ComponentStatus =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral"
  | "ghost";

const SearchInputStyled = styled("input", {
  shouldForwardProp: (prop) => isPropValid(prop) && !["color", 'shouldClean'].includes(prop),
})<{ color: ComponentStatus; shouldClean: () => boolean }>(({
  border: `1px solid #dfe1e5`,
  padding: "0.5rem 2rem",
  boxSizing: "border-box",
  display: "flex",
  width: "100%",
  height: "44px",
  fontSize: "1rem",
  borderRadius: "24px",
}));

export type SearchInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "color" | "size"
> & {
  shouldClean?: () => boolean;
  icon?: React.ReactNode;
  color?: ComponentStatus;
};

const shouldCleanDefaultFn = () => false;

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { shouldClean = shouldCleanDefaultFn, color = "neutral", ...props },
    ref,
  ): JSX.Element => {
    return (
      <SearchInputStyled
        {...props}
        ref={ref}
        color={color}
        shouldClean={shouldClean}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
