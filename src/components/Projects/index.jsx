import { Section, Title, GlassCard } from "../SharedStyles";
import { ProjectGrid, Tag, Card, TagsList } from "./style";
import project1 from "../../assets/projeto1.png";
import project2 from "../../assets/projeto2.png";
import project3 from "../../assets/projeto3.png";

export function Projects() {
  const projects = [
    {
      title: "DevBurguer",
      img: project1,
      desc: "E-commerce de lanches e hambúrgueres com site completo, incluindo carrinho de compras, sistema de pagamentos e painel administrativo.",
      tags: ["React", "styled-components", "Node.js", "MongoDB", "postgreSQL", "Express.js", "JWT", "Stripe"],
    },
    {
      title: "Portifólio Pessoal",
      img: project2,
      desc: "Criado com React e Styled Components, este portfólio pessoal apresenta minhas habilidades, projetos e experiências de forma interativa e visualmente atraente.",
      tags: ["React", "styled-components"],
    },
    {
      title: "Cadastro de Usuários",
      img: project3,
      desc: "Sistema de cadastro de usuários com funcionalidades de login, registro e gerenciamento de perfis. usa API RESTful e banco de dados mongoDB.",
      tags: ["React", "styled-components", "Node.js", "MongoDB"],
    },
  ];

  return (
    <Section id="projects">
      <Title>
        Criação de Produtos Digitais | <span>Apresentação de Portfólio</span>
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <GlassCard key={index}>
            <Card>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <TagsList>
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagsList>
            </Card>
          </GlassCard>
        ))}
      </ProjectGrid>
    </Section>
  );
}
