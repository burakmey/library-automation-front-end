import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function BookListItem({ book }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("BookListItem mounted!");
    return () => console.log("BookListItem unmounted!");
  }, []);

  return (
    <BookItem>
      <Image>Kitap Resim</Image>
      <BookName>{book.name}</BookName>
      <ReviewButton onClick={() => navigate("/search/book", { state: book })}>İncele</ReviewButton>
    </BookItem>
  );
}

export default BookListItem;

const BookItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 350px;
  margin: 25px;
  padding: 10px;
  background: #a9a9a9;
  border: 5px solid #555555;
  border-radius: 5px;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  overflow-wrap: break-word;
  @media (max-width: 500px) {
    margin: 25px 0;
  }
`;
const Image = styled.div`
  width: 180px;
  height: 180px;
  background: #a9afaf;
`;
const BookName = styled.p`
  font-size: 18px;
  max-width: 100%;
  font-weight: 600;
`;
const ReviewButton = styled.button`
  color: var(--text-black);
  background-color: #fff;
  border-radius: 40px;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  width: 100%;
  transition: all 0.2s;
`;
