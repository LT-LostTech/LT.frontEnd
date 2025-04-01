import styled from "styled-components";
import { theme } from "../../theme/theme";

interface ModalContainerProps {
  position: string;
}

interface ModalPhotoProps {
  display: string
}

export const ModalContainer = styled.div<ModalContainerProps>`
  width: 906px;
  height: 605px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: ${props => props.position};
  top: ${props => props.position === "fixed" ? "50%" : "0"};
  left: ${props => props.position === "fixed" ? "50%" : "0"};
  transform: ${props => props.position === "fixed" ? "translate(-50%, -50%)" : "translate(0, 0)"};
  z-index: 1000;

  @media (max-width: 1024px) {
    width: 650px;
    height: 435px;
  }

  @media (max-width: 430px) {
    width: 325px;
    height: 90%;
    
  }
`;
export const ModalPhoto = styled.img<ModalPhotoProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => props.display};

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px 55px;
  height: 100%;
  width: 100%;

  button {
    height: 56px;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    padding: 24px 30px;

    button {
      height: 50px;
      font-size: 14px;
    }
  }

  @media (max-width: 430px) {
    padding: 24px 20px;

    button {
      height: 32px;
      font-size: 12px;
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${theme.colors.black};
  text-align: center;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 14px;
  }
`;

export const ModalForgotPassword = styled.p<{ display: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: ${(props) => props.display};
  margin-left: auto;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const ModalChangeOption = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 21px;

  @media (max-width: 1024px) {
    height: 16px;
  }
`;

export const ModalChangeLine = styled.hr`
  width: 120px;
  height: 1px;
  background-color: ${theme.colors.black};

  @media (max-width: 1024px) {
    width: 80px;
  }
`;
export const ModalChangeOptionText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  border: none;

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  .highlight {
    color: ${theme.colors.blue400};
    cursor: pointer;
    text-decoration: underline;
  }
`;
