import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MainContainer, Wrapper } from "../../components/Container/Container.style";
import { TextNormal } from "../../components/Text/Text.styles";
import NavigationBar from "../../components/NavigationBar";
import { publicRoutes } from "../../constants/RouteEndpoints";
import useAuthContext from "../../hooks/useAuthContext";
import useUserContext from "../../hooks/useUserContext";
import { BookRequest, ReserveResponse, SendDesireResponse } from "../../models/user/UserModels";
import { GetBookResponse } from "../../models/library/LibraryModels";

const background = "var(--background-linear)";

function ReviewBook() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { userBorrowBook, userReserveBook } = useUserContext();
  let book;
  try {
    book = new GetBookResponse(location.state);
  } catch (error) {
    book = null;
  }

  useEffect(() => {
    console.log("ReviewBook mounted!");
    if (book === null || book === undefined) navigate(publicRoutes.search);
    return () => console.log("ReviewBook unmounted!");
  }, [book, navigate]);

  const handleBorrowButton = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you want to submit the borrowing request to admin?");
    if (confirmed) {
      try {
        const bookRequest = new BookRequest({ bookId: book.id });
        const response = await userBorrowBook(bookRequest);
        const sendDesireResponse = new SendDesireResponse(response);
        window.confirm(sendDesireResponse.message);
      } catch (error) {
        window.confirm(error.response.data);
      }
    } else {
      console.log("Action canceled.");
    }
  };

  const handleReserveButton = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you want to submit the reservation?");
    if (confirmed) {
      try {
        const bookRequest = new BookRequest({ bookId: book.id });
        const response = await userReserveBook(bookRequest);
        const reserveResponse = new ReserveResponse(response);
        window.confirm(reserveResponse.message);
      } catch (error) {
        window.confirm(error.response.data);
      }
    } else {
      console.log("Action canceled.");
    }
  };

  if (!book) return null;
  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <ReviewBookWrapper>
        <ReviewBookContainer>
          <BookInfoContainer>
            <Image />
            <Col>
              <TextNormal>{book.name}</TextNormal>
              <TextNormal>{book.bookAuthors.join(", ")}</TextNormal>
              <TextNormal>{book.publisher}</TextNormal>
              <TextNormal>{book.bookCategories.join(", ")}</TextNormal>
              <TextNormal>{book.language}</TextNormal>
              <TextNormal>{book.year}</TextNormal>
              <TextNormal>{book.pageCount}</TextNormal>
            </Col>
          </BookInfoContainer>
          <ButtonsContainer>
            <ActionButton $styles={{ isDisabled: !user }} onClick={!user ? null : handleBorrowButton}>
              Borrow
            </ActionButton>
            <ActionButton $styles={{ isDisabled: !user }} onClick={!user ? null : handleReserveButton}>
              Reserve
            </ActionButton>
          </ButtonsContainer>
        </ReviewBookContainer>
      </ReviewBookWrapper>
    </MainContainer>
  );
}

export default ReviewBook;

const ReviewBookWrapper = styled(Wrapper)`
  height: 80%;
  @media (max-width: 480px) {
    height: 100%;
  }
`;
const ReviewBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 32px;
  border-radius: 5px;
  gap: 32px;
  justify-content: space-around;
  background: #222831;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  color: var(--text-muted);
  @media (max-width: 800px) {
    width: 430px;
  }
  @media (max-width: 480px) {
    padding: 20px 16px;
    height: 100%;
    width: 100%;
    border-radius: 0;
    justify-content: start;
  }
`;
const BookInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    justify-content: start;
    height: fit-content;
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Image = styled.div`
  width: 180px;
  height: 180px;
  background: #a9afaf;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const ActionButton = styled.button`
  color: var(--text-black);
  background-color: ${({ $styles }) => ($styles?.isDisabled ? "#ccc" : "#fff")};
  cursor: ${({ $styles }) => ($styles?.isDisabled ? "not-allowed" : "pointer")};
  border-radius: 40px;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  transition: all 0.2s;
  &:hover {
    background-color: ${({ $styles }) => ($styles?.isDisabled ? "#ccc" : "#f0f0f0")};
  }
`;
