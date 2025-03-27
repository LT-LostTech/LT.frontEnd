import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BackOfficeContainer } from "./styled";

export function BackOfficeLayout() {
    return (
        <BackOfficeContainer>
            <Header display="none"/>
            <Outlet/>
        </BackOfficeContainer>
    )
}