import { useEffect } from "react";
import { MainContainer } from "../../components/Container/Container.style";
import { TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import NavigationBar from "../../components/NavigationBar";
import useAdminContext from "../../hooks/useAdminContext";

const background = "var(--background-linear)";

function ReservedList() {
  const { reservedBooks } = useAdminContext();

  useEffect(() => {
    console.log("ReservedList mounted!");
    console.log(reservedBooks);
    return () => console.log("ReservedList unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>
        {reservedBooks !== null ? (
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
              {reservedBooks.map((reservedBooks, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{reservedBooks.userName}</TableData>
                  <TableData>{reservedBooks.bookName}</TableData>
                  <TableData>{reservedBooks.situation}</TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "There is no reserved book."
        )}
        <TableContainer></TableContainer>
      </TableWrapper>
    </MainContainer>
  );
}

export default ReservedList;
