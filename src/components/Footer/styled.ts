import styled from "styled-components";
import { theme } from "../../theme/theme";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 85px 135px;
    width: 100%;
    background-color: ${props => props.theme.colors.gray800};
    
    @media (max-width: 835px) {
        padding: 32px 24px;
    }

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
        gap: 54px;
        align-items: center;
        padding: 32px 24px;
    }
`

export const FooterLogo = styled.img`
    width: 130px;
    height: 100px;
`

export const FooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 36px;
`

export const FooterTitle = styled.h3`
    font-family: ${theme.font.chackra};
    font-size: 48px;
    font-weight: 700;
    text-decoration: underline;
    color: ${props => props.theme.colors.lightGray};
`

export const FooterItem = styled.ol`
    font-size: 24px;
    font-weight: 500;
    text-decoration: underline;
    color: ${props => props.theme.colors.lightGray};
`

export const FooterNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 480px;
    height: 209px;

    @media (max-width: 430px) {
        width: 339px;
    }

    @media (max-width: 835px) {
        width: 339px;
    }
`

export const FooterNewsletterTitle = styled(FooterTitle)``

export const FooterNewsletterDescription = styled(FooterItem)`
    text-decoration: none;
`



