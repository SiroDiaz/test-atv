import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes, ReactNode, type JSX } from "react";

type ComponentStatus =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral"
  | "ghost";

const SearchInputWrapper = styled("div")(({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "44px",
  fontSize: "1rem",
  borderRadius: "24px",
}));

const InputLeftIcon = styled("div")(({
  position: "absolute",
  left: '8px',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "44px",
  height: "44px",
  fontSize: "1rem",
}));

const SearchInputStyled = styled("input", {
  shouldForwardProp: (prop) => isPropValid(prop) && !["color", 'icon', 'shouldClean'].includes(prop),
})<{ color: ComponentStatus; icon?: ReactNode; shouldClean: () => boolean }>(({ icon }) => ({
  border: `1px solid #dfe1e5`,
  padding: icon ? "0.5rem 2rem 0.5rem 3rem" : "0.5rem 2rem",
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
  icon?: ReactNode;
  color?: ComponentStatus;
};

const shouldCleanDefaultFn = () => false;

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { shouldClean = shouldCleanDefaultFn, icon, color = "neutral", ...props },
    ref,
  ): JSX.Element => {
    return (
      <SearchInputWrapper>
        <InputLeftIcon>{icon}</InputLeftIcon>
        <SearchInputStyled
          {...props}
          ref={ref}
          icon={icon}
          type="text"
          color={color}
          shouldClean={shouldClean}
        />
      </SearchInputWrapper>
    );
  },
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
