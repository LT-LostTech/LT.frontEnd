import styled from "styled-components";
import { theme } from "../../theme/theme";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;
  color: ${theme.colors.gray800};
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;


