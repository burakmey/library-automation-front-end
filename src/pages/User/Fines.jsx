import { useEffect } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { TableButtons, TableContainer, TableData, TableHeader, TableRow, TableWrapper } from "../../components/Table/Table.styles";
import { MainContainer } from "../../components/Container/Container.style";
import { AcceptButton } from "../../components/Button/Button.styles";
import NavigationBar from "../../components/NavigationBar";
import { axiosPrivate } from "../../api/axios";

const background = "var(--background-linear)";

function Fines() {
  const { userData } = useAuthContext();

  useEffect(() => {
    console.log("Fines mounted!");
    console.log(userData.fines);
    return () => console.log("Fines unmounted!");
  }, [userData]);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <TableWrapper>Herhangi bir cezanız yok.</TableWrapper>
    </MainContainer>
  );
}

export default Fines;
