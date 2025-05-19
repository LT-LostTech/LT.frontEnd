import styled from "styled-components";

export const MainNewsContainer = styled.section`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: space-between;
  gap: 80px;
  margin-top: 64px;

  @media (max-width: 440px) {
    display: none;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MainNewsSideNews = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
