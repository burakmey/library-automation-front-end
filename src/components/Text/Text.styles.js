import styled from "styled-components";

export const TextHeader = styled.h1`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 600;
  color: var(--header-primary);
  margin: ${({ $styles }) => $styles?.margin};
`;

export const TextNormal = styled.p`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  color: var(--font-primary);
  margin: ${({ $styles }) => $styles?.margin};
`;

export const TextLabel = styled.label`
  display: block;
  font-size: 12px;
  line-height: 1.3333333333333333;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--font-primary);
  margin: ${({ $styles }) => $styles?.margin};
`;

export const TextSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
