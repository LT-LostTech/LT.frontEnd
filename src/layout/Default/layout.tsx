import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styled";
import { Footer } from "../../components/Footer";

export function Layout() {
  return (
      <LayoutContainer>
        <Header marginTop="24px" displayMenu="block" borderRadius="16px" position="fixed" display="flex" displayMenuTablet={""} />
        <Outlet />
        <Footer />
      </LayoutContainer>
  )
}