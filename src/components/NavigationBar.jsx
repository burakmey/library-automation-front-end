import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pictures/omu-logo.png";
import user from "../assets/icons/user.png";
import useAuthContext from "../hooks/useAuthContext";

function NavigationBar() {
  console.log("NavigationBar mounted!");

  const { userData } = useAuthContext();

  useEffect(() => {
    return () => console.log("NavigationBar unmounted!");
  }, []);

  return (
    <NavBarContainer>
      <LogoContainer to={"/"}>
        <Logo src={logo} />
        <LogoText>OMU Kütüphane</LogoText>
      </LogoContainer>
      <nav>
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <NavLink to={"/search"}>Kitap Ara</NavLink>
        <NavLink to={"/admin"}>Hakkımızda</NavLink>
      </nav>
      <LoginButton>{userData !== null ? <UserButton src={user} /> : <LoginButtonLink to={"/login"}>Giriş Yap</LoginButtonLink>}</LoginButton>
    </NavBarContainer>
  );
}

export default NavigationBar;

const UserButton = styled.img`
  width: 36px;
  height: 36px;
  background: whitesmoke;
  padding: 5px;
  border-radius: 20px;
`;

const NavBarContainer = styled.div`
  display: flex;
  max-width: 1180px;
  min-height: 80px;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 480px) {
    display: none;
  }
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 124px;
  height: 34px;
`;
const Logo = styled.img`
  width: 34px;
  height: 34px;
`;
const LogoText = styled.div`
  font-size: 20px;
  color: cornflowerblue;
  margin-left: 10px;
`;
const NavLink = styled(Link)`
  color: var(--text-black);
  color: var(--header-primary);
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;
const LoginButton = styled.div`
  display: flex;
  min-width: 124px;
  justify-content: flex-end;
`;
const LoginButtonLink = styled(Link)`
  color: var(--text-black);
  background-color: #fff;
  border-radius: 40px;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  transition: all 0.2s;
`;
