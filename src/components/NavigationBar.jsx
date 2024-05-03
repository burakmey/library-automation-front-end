import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  console.log("NavigationBar mounted!");

  useEffect(() => {
    return () => console.log("NavigationBar unmounted!");
  }, []);

  return (
    <NavBarContainer>
      <Logo />
      <nav>
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <NavLink to={"/search"}>Kitap Ara</NavLink>
        <NavLink to={"/admin"}>Hakkımızda</NavLink>
      </nav>
      <LoginButton>
        <LoginButtonLink to={"/login"}>Giriş Yap</LoginButtonLink>
      </LoginButton>
    </NavBarContainer>
  );
}

export default NavigationBar;

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
const Logo = styled.div`
  width: 124px;
  height: 34px;
  background-color: blueviolet;
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
  min-width: 116px;
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
