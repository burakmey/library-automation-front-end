import { useEffect } from "react";
import { TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import NavigationBar from "../../components/NavigationBar";
import useAdminContext from "../../hooks/useAdminContext";

const background = "var(--background-linear)";

function BorrowedList() {
  const { borrowedBooks } = useAdminContext();

  useEffect(() => {
    console.log("BorrowedList mounted!");
    console.log(borrowedBooks);
    return () => console.log("BorrowedList unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>
        {borrowedBooks !== null ? (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Numara</TableHeader>
                <TableHeader>Kişi Adı</TableHeader>
                <TableHeader>Kitap Adı</TableHeader>
                <TableHeader>Durumu</TableHeader>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{row.userName}</TableData>
                  <TableData>{row.bookName}</TableData>
                  <TableData>{row.situation}</TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "Herhangi bir ödünç alınmış kitap bulunmuyor."
        )}
        <TableContainer></TableContainer>
      </TableWrapper>
    </MainContainer>
  );
}

export default BorrowedList;
