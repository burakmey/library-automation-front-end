import { useEffect } from "react";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { AcceptButton, RejectButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import useAdminContext from "../../hooks/useAdminContext";
import { axiosPrivate } from "../../api/axios";

const background = "var(--background-linear)";

function AcceptDesires() {
  const { usersDesires, deleteUserDesire } = useAdminContext();

  useEffect(() => {
    console.log("AcceptDesires mounted!");
    console.log(usersDesires);
    return () => console.log("AcceptDesires unmounted!");
  }, []);

  const handleAcceptButton = (desire) => {
    const confirmed = window.confirm("İsteği onaylıyor musunuz?");
    if (confirmed) {
      let URL;
      if (desire.desireSituation === "Ödünç") URL = process.env.REACT_APP_ADMIN_ACCEPT_BORROW_URL;
      else if (desire.desireSituation === "Rezerve-Ödünç") URL = process.env.REACT_APP_ADMIN_ACCEPT_RESERVE_BORROW_URL;
      else if (desire.desireSituation === "İade") URL = process.env.REACT_APP_ADMIN_ACCEPT_RETURN_URL;
      const acceptDesire = async () => {
        try {
          const response = await axiosPrivate.post(URL, { desireId: desire.id });
          deleteUserDesire(desire.id);
          window.confirm(response.data);
        } catch (error) {
          window.confirm(error.response.data);
        }
      };
      acceptDesire();
    } else {
      console.log("Action canceled.");
    }
  };

  const handleRejectButton = (desireId) => {
    const confirmed = window.confirm("İsteği reddediyor musunuz?");
    if (confirmed) {
      const rejectDesire = async () => {
        try {
          const rejectURL = process.env.REACT_APP_ADMIN_REJECT_DESIRE_URL;
          const response = await axiosPrivate.delete(rejectURL, { data: { desireId: desireId } });
          deleteUserDesire(desireId);
          window.confirm(response.data);
        } catch (error) {
          window.confirm(error.response.data);
        }
      };
      rejectDesire();
    } else {
      console.log("Action canceled.");
    }
  };

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>
        {usersDesires !== null ? (
          <TableContainer>
            <thead>
              <tr>
                <TableHeader>Numara</TableHeader>
                <TableHeader>Kişi Adı</TableHeader>
                <TableHeader>Kitap Adı</TableHeader>
                <TableHeader>İstek</TableHeader>
                <TableHeader>Onayla</TableHeader>
              </tr>
            </thead>
            <tbody>
              {usersDesires.map((row, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{row.userName}</TableData>
                  <TableData>{row.bookName}</TableData>
                  <TableData>{row.desireSituation}</TableData>
                  <TableData>
                    <TableButtons>
                      <AcceptButton onClick={() => handleAcceptButton(row)}>Onay</AcceptButton>
                      <RejectButton onClick={() => handleRejectButton(row.id)}>Ret</RejectButton>
                    </TableButtons>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "Herhangi bir onaylama bulunmuyor."
        )}
        <TableContainer></TableContainer>
      </TableWrapper>
    </MainContainer>
  );
}

export default AcceptDesires;
