import { useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { AcceptButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import { apiPrivate as axiosPrivate } from "../../api/axios";

const background = "var(--background-linear)";

function ReservedBooks() {
  const { userData, updateUserDesires } = useAuthContext();

  useEffect(() => {
    console.log("ReservedBooks mounted!");
    console.log(userData.userBookReserves);
    return () => console.log("ReservedBooks unmounted!");
  }, [userData]);

  const handleBorrowButton = (bookId) => {
    const confirmed = window.confirm("Rezerve ettiğiniz kitabı ödünç almak istiyor musunuz?");
    if (confirmed) {
      const cancelDesireRequest = async () => {
        try {
          const borrowReserveURL = process.env.REACT_APP_USER_BORROW_RESERVE_BOOK_URL;
          const response = await axiosPrivate.post(borrowReserveURL, { bookId: bookId });
          updateUserDesires(response.data.desires);
          window.confirm(response.data.message);
        } catch (error) {
          console.log(error);
        }
      };
      cancelDesireRequest();
    } else {
      console.log("Action canceled.");
    }
  };

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>
        {userData.userBookReserves !== null ? (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Numara</TableHeader>
                <TableHeader>Kitap Adı</TableHeader>
                <TableHeader>Durumu</TableHeader>
                <TableHeader>Rezerve Tarihi</TableHeader>
                {/* <TableHeader>Ödünç Tarihi</TableHeader> */}
                <TableHeader>Son Tarih</TableHeader>
                <TableHeader>İşlem</TableHeader>
              </tr>
            </thead>
            <tbody>
              {userData.userBookReserves?.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{row.bookName}</TableData>
                  <TableData>{row.reserveSituation}</TableData>
                  <TableData>{row.reserveDate}</TableData>
                  {/* <TableData>{row.borrowDate}</TableData> */}
                  <TableData>{row.reserveDueDate}</TableData>
                  <TableData>
                    <TableButtons>
                      {row.borrowDate !== null ? (
                        <AcceptButton disabled={true}>Ödünç</AcceptButton>
                      ) : (
                        <AcceptButton onClick={() => handleBorrowButton(row.bookId)}>Ödünç Al</AcceptButton>
                      )}
                    </TableButtons>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "Rezervasyon yaptığınız bir kitap yok."
        )}
      </TableWrapper>
    </MainContainer>
  );
}

export default ReservedBooks;
