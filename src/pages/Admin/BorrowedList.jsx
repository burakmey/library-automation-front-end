import { useEffect } from "react";
import { MainContainer } from "../../components/Container/Container.style";
import { TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
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
                <TableHeader>Number</TableHeader>
                <TableHeader>User Name</TableHeader>
                <TableHeader>Book Name</TableHeader>
                <TableHeader>Situation</TableHeader>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((borrowedBooks, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{borrowedBooks.userName}</TableData>
                  <TableData>{borrowedBooks.bookName}</TableData>
                  <TableData>{borrowedBooks.situation}</TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "There is no borrowed book."
        )}
        <TableContainer></TableContainer>
      </TableWrapper>
    </MainContainer>
  );
}

export default BorrowedList;
