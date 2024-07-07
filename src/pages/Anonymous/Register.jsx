import { useEffect, useState } from "react";
import { InputContainer, MainContainer, Wrapper } from "../../components/Container/Container.style";
import { TextHeader, TextLabel } from "../../components/Text/Text.styles";
import { InputForm } from "../../components/Input/Input.styles";
import { ButtonLarge, ButtonLink } from "../../components/Button/Button.styles";
import { Select } from "../../components/Select/Select.styles";
import { useNavigate } from "react-router-dom";
import countries from "../../constants/Countries";
import styled from "styled-components";
import axios from "../../api/axios";
import useAuthContext from "../../hooks/useAuthContext";

function Register() {
  console.log("Register mounted!");

  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    countryId: 1,
  });
  const registerURL = process.env.REACT_APP_AUTH_REGISTER_URL;
  const { updateUserData } = useAuthContext();
  const navigate = useNavigate();
  const background = "var(--background-radial)";

  useEffect(() => {
    return () => console.log("Register unmounted!");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(registerURL, registerData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      updateUserData(response.data);
      navigate("/", { replace: true });
    } catch (error) {
      if (!error?.response) {
        console.error("No server response!");
      } else {
        console.error(error.response.data);
      }
    }
  };

  return (
    <MainContainer $styles={{ background: background }}>
      <RegisterFormWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <Col>
            <TextHeader $styles={marginBottom8px}>Bir Hesap Oluştur</TextHeader>
            <InputContainer>
              <TextLabel $styles={marginBottom8px}>E-POSTA</TextLabel>
              <InputForm $styles={marginBottom20px} name="email" type="text" value={registerData.email} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>AD</TextLabel>
              <InputForm $styles={marginBottom20px} name="name" type="text" value={registerData.name} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>SOYAD</TextLabel>
              <InputForm $styles={marginBottom20px} name="surname" type="text" value={registerData.surname} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>ŞİFRE</TextLabel>
              <InputForm $styles={marginBottom20px} name="password" type="password" value={registerData.password} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>ŞİFRE DOĞRULAMA</TextLabel>
              <InputForm $styles={marginBottom20px} name="confirmPassword" type="password" value={registerData.passwordConfirm} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>ÜLKE</TextLabel>
              <Select
                name="countryId"
                value={registerData.countryId}
                onChange={(e) =>
                  setRegisterData((prevData) => ({
                    ...prevData,
                    countryId: e.target.selectedIndex + 1,
                  }))
                }
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </Select>
              <ButtonLarge $styles={{ margin: "0 0 16px 0" }} type="submit">
                Kayıt Ol
              </ButtonLarge>
            </InputContainer>
            <ButtonLink
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              Zaten bir hesabınız var mı?
            </ButtonLink>
          </Col>
        </RegisterForm>
      </RegisterFormWrapper>
    </MainContainer>
  );
}

export default Register;

const marginBottom8px = { margin: "0 0 8px" };
const marginBottom20px = { margin: "0 0 20px" };

const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;
const RegisterFormWrapper = styled(Wrapper)`
  min-height: 580px;
`;
const RegisterForm = styled.form`
  width: 480px;
  padding: 32px;
  border-radius: 5px;
  background: #222831;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  color: var(--text-muted);
  @media (max-width: 485px) {
    position: absolute;
    max-width: none;
    top: 0;
    left: 0;
    padding: 20px 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0;
  }
`;
