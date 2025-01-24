import Footer from "@components/common/Footer";
import NavbarSearch from "@components/common/organisms/NavbarSearch";
import { Outlet } from "react-router";
import { MainAppLayout, MainResultsContainer } from "./common";

const ResultsLayout = () => {
  return (
    <MainAppLayout>
      <NavbarSearch />
      <MainResultsContainer>
        <Outlet />
      </MainResultsContainer>
      <Footer />
    </MainAppLayout>
);
}

export default ResultsLayout;
