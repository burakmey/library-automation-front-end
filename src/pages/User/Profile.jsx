import { useEffect } from "react";
import { MainContainer } from "../../components/Container/Container.style";
import NavigationBar from "../../components/NavigationBar";
import { PanelGrid, PanelItem, PanelWrapper } from "../../components/Panel/Panel.styles";

const background = "var(--background-linear)";

function Profile() {
  useEffect(() => {
    console.log("Profile mounted!");
    return () => console.log("Profile unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <PanelWrapper>
        <PanelGrid>
          <PanelItem to={"/profile/borrowed"}>Ödünç Aldıklarım</PanelItem>
          <PanelItem to={"/profile/reserved"}>Rezerve Ettiklerim</PanelItem>
          <PanelItem to={"/profile/waiting"}>Onay Bekleyenler</PanelItem>
          <PanelItem to={"/profile/fines"}>Cezalarım</PanelItem>
        </PanelGrid>
      </PanelWrapper>
    </MainContainer>
  );
}

export default Profile;
