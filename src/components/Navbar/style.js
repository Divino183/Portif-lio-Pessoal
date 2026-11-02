import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  
  a {
    transition: color 0.2s;
    &:hover {
      color: ${(props) => props.theme.accentCyan};
    }
  }
`;

// Container dos links (muda drasticamente no mobile)
export const NavLinks = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;

  a {
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 1rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.secondDarkPurple};
      border-bottom: ${(props) => (props.$isActive ? `1px solid ${props.theme.secondDarkPurple}` : `1px solid ${props.theme.secondDarkPurple}`)};
      padding-bottom: 5px;
      font-weight: 700;
    }
  }

  /* Estilos para Telas Mobile/Tablet */
  @media (max-width: 768px) {
    position: fixed;
    top: 80px;
    right: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background: ${(props) => props.theme.surface};
    backdrop-filter: blur(16px);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    
    /* Controle de visibilidade baseado na prop isOpen */
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    border-top: 1px solid ${(props) => props.theme.border};

    a {
      font-size: 1.3rem;
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;

// Botão Hambúrguer estilizado em CSS puro
export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.textPrimary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    /* Animação das linhas para formar o 'X' quando aberto */
    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;