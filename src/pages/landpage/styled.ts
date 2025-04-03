import styled from 'styled-components';
import backgroundImage from '../../assets/backgrounds/sectionsWithIllustration.png';

export const SectionWithIllustrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;

    background-image: ${`url(${backgroundImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`