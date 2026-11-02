import { Nav, Logo, NavLinks, Hamburger } from "./style";

// src/components/Navbar.jsx
import { useState } from 'react';



export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  // Função auxiliar para fechar o menu ao clicar em um link no mobile
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Logo>
        <a href="#hero" onClick={handleLinkClick}>Divino Gomes</a>
      </Logo>

      {/* Passamos o estado isOpen como propriedade para o Styled Component controlar o CSS */}
      <NavLinks $isOpen={isOpen}>
        <a href="#hero" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>Sobre</a>
        <a href="#projects" onClick={handleLinkClick}>Projetos</a>
        <a href="#contact" onClick={handleLinkClick}>Contato</a>
      </NavLinks>

      {/* Botão que alterna o estado entre verdadeiro/falso ao ser clicado */}
      <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
    </Nav>
  );
};
