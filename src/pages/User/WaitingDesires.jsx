import { useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { RejectButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import { axiosPrivate } from "../../api/axios";

const background = "var(--background-linear)";

function WaitingDesires() {
  const { userData, updateUserDesires } = useAuthContext();

  useEffect(() => {
    console.log("WaitingDesires mounted!");
    console.log(userData.desires);
    return () => console.log("WaitingDesires unmounted!");
  }, [userData]);

  const handleCancelButton = (desireId) => {
    const confirmed = window.confirm("İşlemi iptal etmek istiyor musunuz?");
    if (confirmed) {
      const cancelDesireRequest = async () => {
        try {
          const cancelURL = process.env.REACT_APP_USER_CANCEL_DESIRE_URL;
          const response = await axiosPrivate.delete(cancelURL, { data: { desireId: desireId } });
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
        {userData.desires !== null ? (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Numara</TableHeader>
                <TableHeader>Kitap Adı</TableHeader>
                <TableHeader>İstek</TableHeader>
                <TableHeader>İşlem</TableHeader>
              </tr>
            </thead>
            <tbody>
              {userData.desires?.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{row.bookName}</TableData>
                  <TableData>{row.situation}</TableData>
                  <TableData>
                    <TableButtons>
                      <RejectButton onClick={() => handleCancelButton(row.id)}>İptal Et</RejectButton>
                    </TableButtons>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "Herhangi bir onaylama bulunmuyor."
        )}
      </TableWrapper>
    </MainContainer>
  );
}

export default WaitingDesires;
