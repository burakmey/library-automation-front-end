import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImage from "../../assets/pictures/hero-section.jpg";
import { SearchButton } from "../../components/Button/Button.styles";
import { BackgroundContainer, SearchContainer } from "../../components/Container/Container.style";
import { InputSearch } from "../../components/Input/Input.styles";
import { TextHeader, TextNormal } from "../../components/Text/Text.styles";
import { publicRoutes } from "../../constants/RouteEndpoints";
import useAuthContext from "../../hooks/useAuthContext";

const BACKGROUND = "var(--background-linear)";
const NOT_LOGGED_IN_TEXT = "You can register in our system to borrow or reserve books.";
const LOGGED_IN_TEXT = "You can borrow or reserve books from our library.";

function Home() {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log("Home mounted!");
    return () => console.log("Home unmounted!");
  }, []);

  return (
    <>
      <BackgroundContainer $styles={{ background: BACKGROUND }} />
      <HomeContainer>
        <LibraryImage src={heroImage} />
        <Col>
          <TextHeader $styles={{ margin: "0 0 20px" }}>Search for a book in Our Library!</TextHeader>
          <SearchContainer>
            <InputSearch />
            <SearchButton>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor"></path>
              </svg>
            </SearchButton>
          </SearchContainer>
          <TextNormal $styles={{ margin: "20px 0 0" }}>{!user ? NOT_LOGGED_IN_TEXT : LOGGED_IN_TEXT}</TextNormal>
          <ButtonDiv>
            {!user ? <ButtonLink to={publicRoutes.register}>Register</ButtonLink> : <ButtonLink to={publicRoutes.search}>Search Book</ButtonLink>}
          </ButtonDiv>
        </Col>
      </HomeContainer>
    </>
  );
}

export default Home;

// Styled components.

const HomeContainer = styled.div`
  margin-top: 2%;
`;

const LibraryImage = styled.img`
  display: block;
  margin: auto;
  width: 40%;
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
