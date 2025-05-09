import styled from "styled-components";

export const BiggerNewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 650px;
  background-color: #fff;
  border-radius: 32px;

  @media (max-width: 824px) {
    width: 100%;
  }

  @media (max-width: 440px) {
    display: none;
  }
`;

export const BiggerNewsCardImage = styled.img`
  width: 100%;
  height: 67%;
  border-radius: 32px 32px 0 0;
  object-fit: cover;
`;

export const BiggerNewsCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  height: 33%;
  background-color: #fff;
  border-radius: 0 0 32px 32px;

  
`;

export const BiggerNewsCardTitle = styled.h2`
  font-size: 32px;
  color: #000;
  margin-top: 8px;
  font-weight: 400;

  @media (max-width: 824px) {
    font-size: 20px;
  }
`;
