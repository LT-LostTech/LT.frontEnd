import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { BackOfficeContainer } from "./styled";

export function BackOfficeLayout() {
    return (
        <BackOfficeContainer>
            <Header displayMenuTablet="block" displayMenu="flex" borderRadius="0" position="" display="none"/>
            <Outlet/>
        </BackOfficeContainer>
    )
}