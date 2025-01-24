import Footer from "@components/common/templates/Footer";
import Navbar from "@components/common/organisms/Navbar";
import { Outlet } from "react-router";
import { MainAppContainer, MainAppLayout } from "./common";

const MainLayout = () => (
  <MainAppLayout>
    <Navbar />
    <MainAppContainer>
      <Outlet />
    </MainAppContainer>
    <Footer />
  </MainAppLayout>
);

export default MainLayout;
