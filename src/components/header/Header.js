import React from "react";
import { HeaderContainer, Navbar, HeaderContents, NavbarContents } from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export const Header = () => {

    const navigate = useNavigate()
    return (
        <>
        <HeaderContainer>
            <HeaderContents>Header</HeaderContents>
            <Navbar>
                <NavbarContents onClick={() => navigate("/main")}>
                    game
                </NavbarContents>
                <NavbarContents onClick={() => navigate("/ranking")}>
                    ranking
                </NavbarContents>
            </Navbar>
        </HeaderContainer >
        </>
    )
}