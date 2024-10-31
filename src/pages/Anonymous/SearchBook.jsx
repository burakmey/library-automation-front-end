import { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { SearchButton } from "../../components/Button/Button.styles";
import { BackgroundContainer, SearchContainer } from "../../components/Container/Container.style";
import { InputSearch } from "../../components/Input/Input.styles";
import { TextHeader } from "../../components/Text/Text.styles";
import BookListItem from "../../components/BookListItem";
import useDebounce from "../../hooks/useDebounce";
import useLibraryContext from "../../hooks/useLibraryContext";
import { GetBookResponse, SearchBookRequest, SearchResultResponse } from "../../models/library/LibraryModels";

const BACKGROUND = "var(--background-linear)";
const RESULT_RESPONSE = new SearchResultResponse({ totalCount: 0, books: [] });
const PAGE_SIZE = 6;

function SearchBook() {
  const { librarySearchBook } = useLibraryContext();
  const [results, setResults] = useState(RESULT_RESPONSE);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 1000);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log("SearchBook mounted!");
    return () => console.log("SearchBook unmounted!");
  }, []);

  const fetchResults = useCallback(
    async (page) => {
      setIsLoading(true);
      try {
        const searchBookRequest = new SearchBookRequest({ search: debouncedSearch, page, size: PAGE_SIZE });
        const response = await librarySearchBook(searchBookRequest);
        setResults(new SearchResultResponse(response));
        setError("");
      } catch (error) {
        setResults(RESULT_RESPONSE);
        setError(typeof error === "string" ? error : "An unexpected error occurred.");
      } finally {
        setIsLoading(false);
      }
    },
    [debouncedSearch, librarySearchBook]
  );

  useEffect(() => {
    if (debouncedSearch) {
      fetchResults(0);
      setCurrentPage(0);
    }
  }, [debouncedSearch, fetchResults]);

  useEffect(() => {
    if (!isFirstRender.current) {
      fetchResults(currentPage);
    } else {
      isFirstRender.current = false;
    }
  }, [currentPage, fetchResults]);

  const handleChange = (e) => {
    setIsLoading(true);
    setResults(RESULT_RESPONSE);
    setSearchValue(e.target.value);
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    if ((currentPage + 1) * PAGE_SIZE < results.totalCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = (e) => {
    e.preventDefault();
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <BackgroundContainer $styles={{ background: BACKGROUND }} />
      <Col>
        <TextHeader $styles={{ margin: "0 0 20px" }}>Search for a book in Our Library!</TextHeader>
        <SearchContainer>
          <InputSearch name="search" type="text" onChange={handleChange} />
          <SearchButton>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor"></path>
            </svg>
          </SearchButton>
        </SearchContainer>
      </Col>
      <Grid>
        {isLoading ? (
          <p>Loading...</p>
        ) : results.totalCount > 0 ? (
          results.books.map((book, index) => <BookListItem key={index} bookItem={new GetBookResponse(book)} />)
        ) : (
          <p>{error}</p>
        )}
      </Grid>
      <PaginationContainer>
        <button onClick={handlePreviousPage} disabled={isLoading || currentPage === 0}>
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button onClick={handleNextPage} disabled={isLoading || (currentPage + 1) * PAGE_SIZE >= results.totalCount}>
          Next
        </button>
      </PaginationContainer>
    </>
  );
}

export default SearchBook;

// Styled components

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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 80%;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #022131;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
      background-color: #555555;
      cursor: not-allowed;
    }
  }

  span {
    margin: 0 10px;
    font-size: 16px;
    color: white;
  }
`;
