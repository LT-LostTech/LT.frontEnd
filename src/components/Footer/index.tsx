import {
  FooterContainer,
  FooterItem,
  FooterNav,
  FooterLogo,
  FooterNewsletter,
  FooterNewsletterDescription,
  FooterNewsletterTitle,
  FooterTitle,
} from "./styled";
import logo from "../../assets/logo-lost-tech.svg";
import { Input } from "../Input";

const footerItems = ["Roadmaps", "Notícias", "Desafios"];

export function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={logo} />
      <FooterNav>
        <FooterTitle>Explore</FooterTitle>
        {footerItems.map((item, key) => (
          <FooterItem key={key}>{item}</FooterItem>
        ))}
      </FooterNav>
      <FooterNewsletter>
        <FooterNewsletterTitle>Newsletter</FooterNewsletterTitle>
        <FooterNewsletterDescription>
          Fique por dentro de todas as novidades!
        </FooterNewsletterDescription>
        <Input
          label=""
          placeholder="Digite seu e-mail"
          IconOpen=""
          IconClose=""
          showIcon={false}
          showLabel={false}
        />
      </FooterNewsletter>
    </FooterContainer>
  );
}
