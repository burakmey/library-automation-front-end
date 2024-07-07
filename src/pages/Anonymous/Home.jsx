import { useEffect } from "react";
import { MainContainer, SearchContainer } from "../../components/Container/Container.style";
import { Link } from "react-router-dom";
import { TextHeader, TextNormal } from "../../components/Text/Text.styles";
import { InputSearch } from "../../components/Input/Input.styles";
import { SearchButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import heroImage from "../../assets/pictures/hero-section.jpg";
import useAuthContext from "../../hooks/useAuthContext";

const background = "var(--background-linear)";
const notLoggedInText = "Kitap ödünç almak veya rezerve etmek için sistemimize kayıt olabilirsiniz.";
const loggedInText = "Kütüphanemizden kitap ödünç alabilir veya rezerve edebilirsiniz.";

function Home() {
  const { userData } = useAuthContext();

  useEffect(() => {
    console.log("Home mounted!");
    return () => console.log("Home unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <LibraryImage src={heroImage} />
      <Col>
        <TextHeader $styles={{ margin: "0 0 20px" }}>Kütüphanemizde Bir Kitap Arayın!</TextHeader>
        <SearchContainer>
          <InputSearch />
          <SearchButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor"></path>
            </svg>
          </SearchButton>
        </SearchContainer>
        <TextNormal $styles={{ margin: "20px 0 0" }}>{!userData ? notLoggedInText : loggedInText}</TextNormal>
        <ButtonDiv>{!userData ? <ButtonLink to={"/register"}>Kayıt Ol</ButtonLink> : <ButtonLink to={"/search"}>Kitap Ara</ButtonLink>}</ButtonDiv>
      </Col>
    </MainContainer>
  );
}

export default Home;

// Styled components.
const LibraryImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0;
`;
const ButtonLink = styled(Link)`
  color: var(--text-black);
  background-color: #fff;
  border-radius: 40px;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  transition: all 0.2s;
`;
const Col = styled.div`
  display: flex;
  width: 80%;
  max-width: 1180px;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
  @media (max-width: 500px) {
    padding: 0 16px;
    width: 100%;
  }
`;
