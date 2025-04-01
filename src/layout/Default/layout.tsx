import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styled";
import { Footer } from "../../components/Footer";

export function Layout() {
  return (
      <LayoutContainer>
        <Header position="fixed" display="flex" />
        <Outlet />
        <Footer />
      </LayoutContainer>
  )
}