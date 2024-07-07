import { useEffect } from "react";
import NavigationBar from "../../components/NavigationBar";
import styled from "styled-components";
import { MainContainer, Wrapper } from "../../components/Container/Container.style";
import { TextNormal } from "../../components/Text/Text.styles";
//import { Book } from "../../contracts/Book";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function ReviewBook() {
  const location = useLocation();
  const book = location.state;
  const navigate = useNavigate();
  const { userData, updateUserDesires, updateUserReservations } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    console.log("ReviewBook mounted!");
    if (book === null || book === undefined) navigate("/search");
    return () => console.log("ReviewBook unmounted!");
  }, [book, navigate]);

  const handleActionButton = (actionType) => {
    const confirmed = window.confirm(`${actionType === "borrow" ? "Ödünç alma" : "Rezerve etme"} işlemini onaylıyor musunuz?`);
    if (confirmed) {
      if (actionType === "borrow") {
        const borrowRequest = async () => {
          try {
            const borrowURL = process.env.REACT_APP_USER_BORROW_BOOK_URL;
            const response = await axiosPrivate.post(borrowURL, { bookId: book.id });
            updateUserDesires(response.data.desires);
            window.confirm(response.data.message);
          } catch (error) {
            window.confirm(error.response.data);
          }
        };
        borrowRequest();
      } else if (actionType === "reserve") {
        const reserveRequest = async () => {
          try {
            const reserveURL = process.env.REACT_APP_USER_RESERVE_BOOK_URL;
            const response = await axiosPrivate.post(reserveURL, { bookId: book.id });
            updateUserReservations(response.data.reservations);
            window.confirm(response.data.message);
          } catch (error) {
            window.confirm(error.response.data);
          }
        };
        reserveRequest();
      }
    } else {
      console.log("Action canceled.");
    }
  };

  if (!book) return null;
  return (
    <MainContainer $styles={{ background: "var(--background-linear)" }}>
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
            <ActionButton $styles={{ isDisabled: !userData }} onClick={!userData ? null : () => handleActionButton("borrow")}>
              Ödünç Al
            </ActionButton>
            <ActionButton $styles={{ isDisabled: !userData }} onClick={!userData ? null : () => handleActionButton("reserve")}>
              Rezerve Et
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
