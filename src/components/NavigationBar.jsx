import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pictures/omu-logo.png";
import userIcon from "../assets/icons/user.png";
import useAuthContext from "../hooks/useAuthContext";
import { protecteRoutesdUser, publicRoutes } from "../constants/RouteEndpoints";

function NavigationBar() {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log("NavigationBar mounted!");
    return () => console.log("NavigationBar unmounted!");
  }, []);

  return (
    <NavBarContainer>
      <LogoContainer to={publicRoutes.base}>
        <Logo src={logo} alt="OMU logo" />
        <LogoText>OMU Library</LogoText>
      </LogoContainer>
      <Nav>
        <NavLink to={publicRoutes.base}>Home</NavLink>
        <NavLink to={publicRoutes.search}>Search Book</NavLink>
        <NavLink to={publicRoutes.base}>About</NavLink>
        {user?.role === "Admin" ? <NavLink to="/admin">Admin Panel</NavLink> : null}
      </Nav>
      {!user ? (
        <ButtonLink to={publicRoutes.login} $styles={{ padding: "7px 16px" }}>
          Login
        </ButtonLink>
      ) : (
        <ButtonLink to={protecteRoutesdUser.profile} $styles={{ padding: "" }}>
          <UserButton src={userIcon} alt="User" />
        </ButtonLink>
      )}
    </NavBarContainer>
  );
}

export default NavigationBar;

// Styled components.
const NavBarContainer = styled.div`
  display: flex;
  max-width: 1180px;
  min-height: 80px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1000px) {
    width: 96%;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const LogoContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  width: 36px;
  height: 36px;
`;
const LogoText = styled.div`
  position: absolute;
  font-size: 20px;
  left: 100%;
  margin-left: 10px;
  color: cornflowerblue;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const NavLink = styled(Link)`
  color: var(--header-primary);
  min-width: fit-content;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
const ButtonLink = styled(Link)`
  color: var(--text-black);
  background-color: #fff;
  border-radius: 40px;
  padding: ${({ $styles }) => $styles?.padding};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
`;
const UserButton = styled.img`
  width: 36px;
  height: 36px;
  padding: 5px;
  border-radius: 20px;
`;
