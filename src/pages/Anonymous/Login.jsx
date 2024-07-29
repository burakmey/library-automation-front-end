import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonLarge, ButtonLink } from "../../components/Button/Button.styles";
import { BackgroundContainer, InputContainer, Wrapper } from "../../components/Container/Container.style";
import { InputForm } from "../../components/Input/Input.styles";
import { TextHeader, TextLabel, TextNormal, TextSpan } from "../../components/Text/Text.styles";
import { publicRoutes } from "../../constants/RouteEndpoints";
import useAuthContext from "../../hooks/useAuthContext";
import { LoginRequest } from "../../models/auth/AuthModels";

const BACKGROUND = "var(--background-radial)";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const loginRequest = new LoginRequest({ email: "", password: "" });
  const { authLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Login mounted!");
    return () => console.log("Login unmounted!");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    loginRequest[name] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authLogin(loginRequest);
      navigate(publicRoutes.base, { replace: true });
    } catch (error) {
      console.log(error);
      window.confirm(typeof error === "string" ? error : "An unexpected error occurred.");
    }
  };

  return (
    <>
      <BackgroundContainer $styles={{ background: BACKGROUND }} />
      <LoginFormWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <Row>
            {/* Left Block */}
            <Col>
              {/* Header Block */}
              <Col>
                <TextHeader $styles={{ margin: "0 0 8px" }}>Welcome!</TextHeader>
                <TextNormal>Login with your email and password.</TextNormal>
              </Col>
              {/* Login Block */}
              <InputContainer>
                <TextLabel $styles={{ margin: "0 0 8px" }}>E-MAIL</TextLabel>
                <InputForm $styles={{ margin: "0 0 20px" }} name="email" type="text" ref={emailRef} onChange={handleChange} />
                <TextLabel $styles={{ margin: "0 0 8px" }}>PASSWORD</TextLabel>
                <InputForm name="password" type="password" ref={passwordRef} onChange={handleChange} />
                <ButtonLink $styles={{ margin: "4px 0 20px", padding: "2px 0" }} type="button">
                  Forgot your password?
                </ButtonLink>
                <ButtonLarge $styles={{ margin: "0 0 10px" }} type="submit">
                  Login
                </ButtonLarge>
              </InputContainer>
              <div>
                <TextSpan>Don't have an account?</TextSpan>
                <ButtonLink $styles={{ margin: "0 0 0 4px" }} type="button" onClick={() => navigate(publicRoutes.register)}>
                  Register
                </ButtonLink>
              </div>
            </Col>
          </Row>
        </LoginForm>
      </LoginFormWrapper>
    </>
  );
}

export default Login;

// Styled components.

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
