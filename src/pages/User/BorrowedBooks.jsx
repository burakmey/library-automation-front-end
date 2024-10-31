import { useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { AcceptButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import { apiPrivate as axiosPrivate } from "../../api/axios";

const background = "var(--background-linear)";

function BorrowedBooks() {
  const { userData, updateUserDesires } = useAuthContext();

  useEffect(() => {
    console.log("BorrowedBooks mounted!");
    console.log(userData.userBookBorrows);
    return () => console.log("BorrowedBooks unmounted!");
  }, [userData]);

  const handleReturnButton = (bookId) => {
    const confirmed = window.confirm("İade işlemini onaylıyor musunuz?");
    if (confirmed) {
      const returnBookRequest = async () => {
        try {
          const returnURL = process.env.REACT_APP_USER_RETURN_BOOK_URL;
          const response = await axiosPrivate.post(returnURL, { bookId: bookId });
          updateUserDesires(response.data.desires);
          window.confirm(response.data.message);
        } catch (error) {
          console.log(error.response);
        }
      };
      returnBookRequest();
    } else {
      console.log("Action canceled.");
    }
  };

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>
        {userData.userBookBorrows !== null ? (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Numara</TableHeader>
                <TableHeader>Kitap Adı</TableHeader>
                <TableHeader>Durumu</TableHeader>
                <TableHeader>Ödünç Tarihi</TableHeader>
                <TableHeader>İade Tarihi</TableHeader>
                <TableHeader>Son Tarih</TableHeader>
                <TableHeader>İşlem</TableHeader>
              </tr>
            </thead>
            <tbody>
              {userData.userBookBorrows?.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{row.bookName}</TableData>
                  <TableData>{row.borrowSituation}</TableData>
                  <TableData>{row.borrowDate}</TableData>
                  <TableData>{row.returnDate}</TableData>
                  <TableData>{row.returnDueDate}</TableData>
                  <TableData>
                    <TableButtons>
                      {row.returnDate !== null ? (
                        <AcceptButton disabled={true}>İade</AcceptButton>
                      ) : (
                        <AcceptButton onClick={() => handleReturnButton(row.bookId)}>İade Et</AcceptButton>
                      )}
                    </TableButtons>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "Ödünç aldığınız bir kitap yok."
        )}
      </TableWrapper>
    </MainContainer>
  );
}

export default BorrowedBooks;
