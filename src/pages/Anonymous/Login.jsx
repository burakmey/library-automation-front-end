import { useEffect, useState } from "react";
import { InputContainer, MainContainer, Wrapper } from "../../components/Container/Container.style";
import { TextHeader, TextLabel, TextNormal, TextSpan } from "../../components/Text/Text.styles";
import { InputForm } from "../../components/Input/Input.styles";
import { ButtonLarge, ButtonLink } from "../../components/Button/Button.styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import axios from "../../api/axios";

const loginURL = process.env.REACT_APP_AUTH_LOGIN_URL;
const background = "var(--background-radial)";

function Login() {
  console.log("Login mounted!");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { updateUserData } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    return () => console.log("Login unmounted!");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginURL, loginData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      updateUserData(response.data);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        console.error("No server response!");
      } else {
        console.error(error.response.data);
      }
    }
  };

  return (
    <MainContainer $styles={{ background: background }}>
      <LoginFormWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <Row>
            {/* Left Block */}
            <Col>
              {/* Header Block */}
              <Col>
                <TextHeader $styles={{ margin: "0 0 8px" }}>Hoş Geldiniz!</TextHeader>
                <TextNormal>Size ait olan e-posta ve şifre ile giriş yapın.</TextNormal>
              </Col>
              {/* Login Block */}
              <InputContainer>
                <TextLabel $styles={{ margin: "0 0 8px" }}>E-POSTA</TextLabel>
                <InputForm $styles={{ margin: "0 0 20px" }} name="email" type="text" value={loginData.email} onChange={handleChange} />
                <TextLabel $styles={{ margin: "0 0 8px" }}>ŞİFRE</TextLabel>
                <InputForm name="password" type="password" value={loginData.password} onChange={handleChange} />
                <ButtonLink $styles={{ margin: "4px 0 20px", padding: "2px 0" }} type="button">
                  Şifrenizi mi unuttunuz?
                </ButtonLink>
                <ButtonLarge $styles={{ margin: "0 0 10px" }} type="submit">
                  Giriş Yap
                </ButtonLarge>
              </InputContainer>
              <div>
                <TextSpan>Hesabınız yok mu?</TextSpan>
                <ButtonLink
                  $styles={{ margin: "0 0 0 4px" }}
                  type="button"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Kayıt ol
                </ButtonLink>
              </div>
            </Col>
          </Row>
        </LoginForm>
      </LoginFormWrapper>
    </MainContainer>
  );
}

export default Login;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 66px;
  width: 100%;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;
const LoginFormWrapper = styled(Wrapper)`
  min-height: 580px;
`;
const LoginForm = styled.form`
  width: 784px;
  padding: 32px;
  border-radius: 5px;
  background: var(--background-primary);
  background: #222831;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px;
  color: var(--text-muted);
  @media (max-width: 830px) {
    max-width: 480px;
  }
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
