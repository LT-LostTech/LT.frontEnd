import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 85px 97px;
    background-color: ${props => props.theme.colors.gray800};
    
`

export const FooterLogo = styled.img`
    width: 130px;
    height: 100px;
`

export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 36px;
`

export const FooterTitle = styled.h3`
    font-family: 'Jersey 25';
    font-size: 48px;
    color: ${props => props.theme.colors.lightGray};
`

export const FooterItens = styled.li`
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
`

export const FooterNewsletterTitle = styled(FooterTitle)``

export const FooterNewsletterInput = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.lightGray};
`

