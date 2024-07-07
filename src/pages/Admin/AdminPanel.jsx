import { useEffect } from "react";
import { MainContainer } from "../../components/Container/Container.style";
import NavigationBar from "../../components/NavigationBar";
import { PanelGrid, PanelItem, PanelWrapper } from "../../components/Panel/Panel.styles";

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
          <PanelItem to={"/admin/desires"}>Ödünç/İade Onayla</PanelItem>
          <PanelItem to={"/admin/borrowedList"}>Ödünç Kitap Takibi</PanelItem>
          <PanelItem to={"/admin/reservedList"}>Rezerve Kitap Takibi</PanelItem>
          <PanelItem to={"/admin/add"}>Kitap Ekle</PanelItem>
          <PanelItem to={"/admin/update"}>Kitap Güncelle</PanelItem>
          {/* <PanelItem>Kitap Listesi</PanelItem> */}
          {/* <PanelItem>Kullanıcı Listesi</PanelItem> */}
        </PanelGrid>
      </PanelWrapper>
    </MainContainer>
  );
}

export default AdminPanel;
