import { AboutContainer, ProfileImg, TechGrid, TechItem } from "./style";
import { Section, Title } from "../SharedStyles";
import img from "../../assets/profile.png";
import {
  SiHtml5,
  SiReact,
  SiJavascript,
  SiCss,
  SiStyledcomponents,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";

export function About() {
  return (
    <Section id="about">
      <Title>
        Criando Experiências | <span>Construindo Soluções</span>
      </Title>
      <AboutContainer>
        <ProfileImg src={img} alt="Profile" />
        <div>
          <p style={{ color: "#8b949e", lineHeight: "1.6" }}>
            Olá! Sou Divino Gomes, desenvolvedor Full-Stack em formação,
            apaixonado por tecnologia e aprendizado contínuo. Moro em
            Itupiranga-PA e desenvolvo projetos pessoais e acadêmicos com foco
            em tecnologias modernas para web. Estou sempre explorando novas
            ferramentas, aprimorando minhas habilidades em front-end e back-end
            e transformando ideias em soluções digitais funcionais e intuitivas.
          </p>
          <TechGrid>
            <TechItem>
              <SiHtml5 color="#F24E51" size={32} />
              Html
            </TechItem>
            <TechItem>
              <SiCss color="#3178C6" size={32} />
              Css
            </TechItem>
            <TechItem>
              <SiJavascript color="#F7DF1E" size={32} />
              JavaScript
            </TechItem>
            <TechItem>
              <SiReact color="#61DAFB" size={32} />
              React
            </TechItem>
            <TechItem>
              <SiStyledcomponents color="#DB7093" size={32} />
              Styled Components
            </TechItem>
            <TechItem>
              <SiDocker color="#3178C6" size={32} />
              Docker
            </TechItem>
            <TechItem>
              <SiNodedotjs color="#3178C6" size={32} />
              Node.js
            </TechItem>
          </TechGrid>
        </div>
      </AboutContainer>
    </Section>
  );
}
