import { useEffect } from "react";
import { MainContainer } from "../../components/Container/Container.style";
import { PanelGrid, PanelItem, PanelWrapper } from "../../components/Panel/Panel.styles";
import NavigationBar from "../../components/NavigationBar";
import { protectedRoutesAdmin } from "../../constants/RouteEndpoints";

const background = "var(--background-linear)";

function AdminPanel() {
  useEffect(() => {
    console.log("AdminPanel mounted!");
    return () => console.log("AdminPanel unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <PanelWrapper>
        <PanelGrid>
          <PanelItem to={protectedRoutesAdmin.desires}>Borrow/Return Approval</PanelItem>
          <PanelItem to={protectedRoutesAdmin.borrowed}>Borrowed Book Tracking</PanelItem>
          <PanelItem to={protectedRoutesAdmin.reserved}>Reserved Book Tracking</PanelItem>
          <PanelItem to={protectedRoutesAdmin.addBook}>Add Book</PanelItem>
          <PanelItem to={protectedRoutesAdmin.updateBook}>Update Book</PanelItem>
        </PanelGrid>
      </PanelWrapper>
    </MainContainer>
  );
}

export default AdminPanel;
