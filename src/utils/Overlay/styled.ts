import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

