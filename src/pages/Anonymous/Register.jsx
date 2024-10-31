import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { api } from "../../api/axios";
import { ButtonLarge, ButtonLink } from "../../components/Button/Button.styles";
import { BackgroundContainer, InputContainer, Wrapper } from "../../components/Container/Container.style";
import { InputForm } from "../../components/Input/Input.styles";
import { Select } from "../../components/Select/Select.styles";
import { TextHeader, TextLabel } from "../../components/Text/Text.styles";
import countries from "../../constants/Countries";
import useAuthContext from "../../hooks/useAuthContext";
import { publicRoutes } from "../../constants/RouteEndpoints";

const background = "var(--background-radial)";

function Register() {
  const inputRefs = useRef({
    email: null,
    name: null,
    surname: null,
    password: null,
    confirmPassword: null,
    countryId: null,
  });
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
    confirmPassword: "",
    countryId: 1,
  });

  const { updateUserData } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Register mounted!");
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
      const response = await api.post(registerData, {
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
    <>
      <BackgroundContainer $styles={{ background: background }} />
      <RegisterFormWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <Col>
            <TextHeader $styles={marginBottom8px}>Create an Account</TextHeader>
            <InputContainer>
              <TextLabel $styles={marginBottom8px}>E-MAIL</TextLabel>
              <InputForm $styles={marginBottom20px} name="email" type="text" ref={(el) => (inputRefs.current.email = el)} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>NAME</TextLabel>
              <InputForm $styles={marginBottom20px} name="name" type="text" ref={(el) => (inputRefs.current.name = el)} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>SURNAME</TextLabel>
              <InputForm $styles={marginBottom20px} name="surname" type="text" ref={(el) => (inputRefs.current.surname = el)} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>PASSWORD</TextLabel>
              <InputForm $styles={marginBottom20px} name="password" type="password" ref={(el) => (inputRefs.current.password = el)} onChange={handleChange} />
              <TextLabel $styles={marginBottom8px}>CONFIRM PASSWORD</TextLabel>
              <InputForm
                $styles={marginBottom20px}
                name="confirmPassword"
                type="password"
                ref={(el) => (inputRefs.current.confirmPassword = el)}
                onChange={handleChange}
              />
              <TextLabel $styles={marginBottom8px}>COUNTRY</TextLabel>
              <Select
                name="countryId"
                ref={(el) => (inputRefs.current.countryId = el)}
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
                Register
              </ButtonLarge>
            </InputContainer>
            <ButtonLink
              type="button"
              onClick={() => {
                navigate(publicRoutes.login);
              }}
            >
              Already have an account?
            </ButtonLink>
          </Col>
        </RegisterForm>
      </RegisterFormWrapper>
    </>
  );
}

export default Register;

const marginBottom8px = { margin: "0 0 8px" };
const marginBottom20px = { margin: "0 0 20px" };

// Styled components.

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
