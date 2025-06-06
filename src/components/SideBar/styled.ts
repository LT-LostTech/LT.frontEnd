import styled from 'styled-components';
import { theme } from '../../theme/theme';
import background from '../../assets/backgrounds/sectionsWithIllustration.png'

export const ContainerLinksSideBar = styled.div`
    position: fixed;
    top: 5%;
    right: 0;
    background-image:url(${background});
    background-position: center;
    background-repeat:no-repeat ;
    background-size: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 100;
`

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    padding: 25px 25px 25px 10px;
    gap: 25px;
`

export const GroupTexts = styled.div`
    color: ${theme.colors.white};
    font-size: 20px;
    font-weight: 600;
`