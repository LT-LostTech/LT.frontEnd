import styled from "styled-components";
import { theme } from "../../theme/theme";


export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 48px 24px;
  background-color: ${theme.colors.white};
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: auto;
  gap: 24px;
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

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  height: auto;
`;


