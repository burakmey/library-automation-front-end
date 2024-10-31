import { useEffect } from "react";
import { InputContainer, MainContainer, Wrapper } from "../../components/Container/Container.style";
import NavigationBar from "../../components/NavigationBar";
import { TextHeader, TextLabel } from "../../components/Text/Text.styles";
import { InputForm } from "../../components/Input/Input.styles";
import { ButtonLarge } from "../../components/Button/Button.styles";
import styled from "styled-components";

function UpdateBook() {
  console.log("UpdateBook mounted!");

  const background = "var(--background-linear)";

  useEffect(() => {
    return () => console.log("UpdateBook unmounted!");
  }, []);

  return (
    <MainContainer $styles={{ background: background }}>
      <NavigationBar />
      <UpdateBookFormWrapper>
        <UpdateBookForm>
          <TextHeader $styles={marginBottom8px}>Kitap Güncelle</TextHeader>
          <InputForm name="name" type="text" />
          <Row>
            <Col>
              <InputContainer>
                <TextLabel $styles={marginBottom8px}>ADI</TextLabel>
                <InputForm $styles={marginBottom20px} name="name" type="text" />
                <TextLabel $styles={marginBottom8px}>YAZARI</TextLabel>
                <InputForm $styles={marginBottom20px} name="writer" type="text" />
                <TextLabel $styles={marginBottom8px}>YAYIN EVİ</TextLabel>
                <InputForm $styles={marginBottom20px} name="publisher" type="text" />
                <TextLabel $styles={marginBottom8px}>BASIM YILI</TextLabel>
                <InputForm name="year" type="text" />
              </InputContainer>
            </Col>
            <Col>
              <InputContainer>
                <TextLabel $styles={marginBottom8px}>DİLİ</TextLabel>
                <InputForm $styles={marginBottom20px} name="language" type="text" />
                <TextLabel $styles={marginBottom8px}>SAYFA SAYISI</TextLabel>
                <InputForm $styles={marginBottom20px} name="pages" type="text" />
                <TextLabel $styles={marginBottom8px}>EKLENECEK MİKTAR</TextLabel>
                <InputForm $styles={marginBottom20px} name="count" type="text" />
                <TextLabel $styles={marginBottom8px}>KATEGORİ</TextLabel>
                <InputForm name="category" type="text" />
              </InputContainer>
            </Col>
          </Row>
          <Row>
            <Image />
            <ButtonsContainer>
              <ButtonLarge>Resim Güncelle</ButtonLarge>
              <ButtonLarge type="submit">Kitap Güncelle</ButtonLarge>
            </ButtonsContainer>
          </Row>
        </UpdateBookForm>
      </UpdateBookFormWrapper>
    </MainContainer>
  );
}

export default UpdateBook;

const marginBottom8px = { margin: "0 0 8px" };
const marginBottom20px = { margin: "0 0 20px" };

const UpdateBookFormWrapper = styled(Wrapper)`
  height: 80%;
  @media (max-width: 800px) {
    margin-top: 32px;
    height: 100%;
    position: relative;
  }
`;
const UpdateBookForm = styled.form`
  width: 640px;
  /* width: 1180px; */
  padding: 32px;
  border-radius: 5px;
  background: #222831;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  color: var(--text-muted);
  @media (max-width: 800px) {
    width: 430px;
  }
  @media (max-width: 480px) {
    padding: 20px 16px;
    width: 100%;
    border-radius: 0;
  }
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;

  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0;
  }
`;
const Image = styled.div`
  min-width: 180px;
  min-height: 180px;
  margin-top: 32px;
  background: #a9afaf;
`;
