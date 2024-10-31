import { useEffect } from "react";
import { AcceptButton, RejectButton } from "../../components/Button/Button.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import NavigationBar from "../../components/NavigationBar";
import { desireSituationEnum } from "../../constants/SituationEnums";
import useAdminContext from "../../hooks/useAdminContext";
import { DesireRequest } from "../../models/common/CommonModels";
const background = "var(--background-linear)";

function AcceptDesires() {
  const { usersDesires, deleteUserDesire, acceptBorrow, acceptReserveBorrow, acceptReturn, rejectDesire } = useAdminContext();

  useEffect(() => {
    console.log("AcceptDesires mounted!");
    console.log(usersDesires);
    return () => console.log("AcceptDesires unmounted!");
  }, []);

  const handleAcceptButton = async (e, situation, desireId) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you approve the request?");
    if (confirmed) {
      try {
        let response;
        const request = new DesireRequest({ desireId: desireId });
        if (situation === desireSituationEnum.borrow) response = await acceptBorrow(request);
        else if (situation === desireSituationEnum.reserveBorrow) response = await acceptReserveBorrow(request);
        else if (situation === desireSituationEnum.return) response = await acceptReturn(request);
        deleteUserDesire(desireId);
        window.confirm(response.data);
      } catch (error) {
        window.confirm(error.response.data);
      }
    } else {
      console.log("Action canceled.");
    }
  };

  const handleRejectButton = async (e, desireId) => {
    e.preventDefault();
    const confirmed = window.confirm("Do you reject the request?");
    if (confirmed) {
      try {
        const request = new DesireRequest({ desireId: desireId });
        const response = rejectDesire(request);
        deleteUserDesire(desireId);
        window.confirm(response.data);
      } catch (error) {
        window.confirm(error.response.data);
      }
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
                <TableHeader>Number</TableHeader>
                <TableHeader>User Name</TableHeader>
                <TableHeader>Book Name</TableHeader>
                <TableHeader>Desire</TableHeader>
                <TableHeader>Approve</TableHeader>
              </tr>
            </thead>
            <tbody>
              {usersDesires.map((usersDesire, index) => (
                <TableRow key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{usersDesire.userName}</TableData>
                  <TableData>{usersDesire.bookName}</TableData>
                  <TableData>{usersDesire.desireSituation}</TableData>
                  <TableData>
                    <TableButtons>
                      <AcceptButton onClick={(e) => handleAcceptButton(e, usersDesire.desireSituation, usersDesire.id)}>Accept</AcceptButton>
                      <RejectButton onClick={(e) => handleRejectButton(e, usersDesire.id)}>Reject</RejectButton>
                    </TableButtons>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </TableContainer>
        ) : (
          "There is no confirmation."
        )}
        <TableContainer></TableContainer>
      </TableWrapper>
    </MainContainer>
  );
}

export default AcceptDesires;
