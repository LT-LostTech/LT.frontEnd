import styled from 'styled-components';
import { theme } from '../../theme/theme';
import background from '../../assets/backgrounds/sectionsWithIllustration.png'

export const ContainerLinksSideBar = styled.div`
    position: fixed;
    top: 14.3%;
    right: 10%;
    background-image:url(${background});
    background-position: center;
    background-repeat:no-repeat ;
    background-size: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 1005;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    padding: 10px 50px 25px 10px;
    gap: 40px;
`

export const PositionButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
    position: absolute;
    left: 20%;
`

export const GroupTexts = styled.div`
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 600;
`