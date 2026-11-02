import { Section, Title, GlassCard } from "../SharedStyles";
import { SiGithub, SiMinutemailer } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {
  ContactContainer,
  ContactInfo,
  Input,
  Textarea,
  Button,
  SocialLinks,
  SocialLink,
} from "./style";

export function Contact() {
  return (
    <Section id="contact">
      <Title>
        Conecte-se comigo | <span>Vamos conversar</span>
      </Title>
      <ContactContainer>
        <GlassCard as="form" onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Seu Nome" />
        <Input type="email" placeholder="Seu E-mail" />
        <Textarea placeholder="Sua Mensagem" />
        <Button type="submit">Enviar Mensagem</Button>
      </GlassCard>
        <ContactInfo>
          <h3>Divino Gomes</h3>
          <p>
            Estou sempre aberto a novos projetos, colaborações ou apenas para
            conversar. Fique à vontade para entrar em contato diretamente!
          </p>
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/valdivinog/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </SocialLink>

            <SocialLink
              href="https://github.com/Divino183"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <SiGithub />
              <span>GitHub</span>
            </SocialLink>

            <SocialLink
              href="mailto:divinog183@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="E-mail"
            >
              <SiMinutemailer />
              <span>E-mail</span>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </ContactContainer>
    </Section>
  );
}
