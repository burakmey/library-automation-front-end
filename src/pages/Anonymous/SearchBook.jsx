import { useState, useEffect } from "react";
import { MainContainer, SearchContainer } from "../../components/Container/Container.style";
import { InputSearch } from "../../components/Input/Input.styles";
import { TextHeader } from "../../components/Text/Text.styles";
import { SearchButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import BookListItem from "../../components/BookListItem";
import axios from "../../api/axios";
import useDebounce from "../../hooks/useDebounce";

const searchURL = process.env.REACT_APP_LIBRARY_SEARCH_BOOK_URL;

function SearchBook() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    console.log("SearchBook mounted!");
    return () => console.log("SearchBook unmounted!");
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      const fetchResults = async () => {
        try {
          const response = await axios.get(searchURL, {
            params: { search: debouncedSearch, page: page - 1, size: size },
          });
          setResults(response.data.books);
          setError("");
        } catch (err) {
          setError("Herhangi bir kitap bulunamadı!");
        }
      };

      fetchResults();
    } else {
      setResults([]);
    }
  }, [debouncedSearch, page, size]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <MainContainer $styles={{ background: "var(--background-linear)" }}>
      <NavigationBar />
      <Col>
        <TextHeader $styles={{ margin: "0 0 20px" }}>Kütüphanemizde Bir Kitap Arayın!</TextHeader>
        <SearchContainer>
          <InputSearch name="search" type="text" value={search} onChange={handleInputChange} />
          <SearchButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor"></path>
            </svg>
          </SearchButton>
        </SearchContainer>
      </Col>
      <Grid>{results.length > 0 ? results.map((book, index) => <BookListItem key={index} book={book} />) : <p>{error}</p>}</Grid>
    </MainContainer>
  );
}

export default SearchBook;

const Col = styled.div`
  display: flex;
  width: 80%;
  max-width: 1180px;
  flex-direction: column;
  text-align: center;
  margin: 20px auto;
  @media (max-width: 480px) {
    padding: 0 16px;
    width: 100%;
  }
`;
const Grid = styled.div`
  display: grid;
  width: 80%;
  max-width: 1180px;
  margin: 40px auto;
  /* grid-gap: 25px; */
  border: 5px solid #555555;
  border-radius: 10px;
  background: #022131;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
