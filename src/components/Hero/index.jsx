import {
  HeroContainer,
  AvatarWrapper,
  AvatarCard,
  AvatarRing,
  Content,
  MainTitle,
  Subtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from "./style";
import { Section } from "../SharedStyles";
import img from "../../assets/profile.png"; // Substitua pelo caminho correto da sua imagem

export function Hero() {
  return (
    <Section id="hero">
      <HeroContainer>
        <AvatarWrapper>
          <AvatarCard>
            <AvatarRing>
              <img src={img} alt="foto-de-divino" />
            </AvatarRing>
          </AvatarCard>
        </AvatarWrapper>
        <Content>
          <MainTitle>
            Construindo experiências digitais modernas |
            <span> Desenvolvedor Full-Stack em formação</span>
          </MainTitle>
          <Subtitle>
            Desenvolvendo aplicações web e interfaces intuitivas com foco em
            aprendizado contínuo, boas práticas e inovação. Sempre explorando
            novas tecnologias e transformando conhecimento em projetos reais.
          </Subtitle>
          <ButtonGroup>
            <PrimaryButton href="#projects">Ver Projetos</PrimaryButton>
            <SecondaryButton href="#contact">Entrar em Contato</SecondaryButton>
          </ButtonGroup>
        </Content>
      </HeroContainer>
    </Section>
  );
}
