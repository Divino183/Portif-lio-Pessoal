import styled, { keyframes } from 'styled-components';
import { GlassCard } from "../SharedStyles";

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  // Efeito de brilho neon azul atrás do avatar
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, ${(props) => props.theme.gren} 0%, ${(props) => props.theme.mainBlack} 70%);
    z-index: 0;
  }
`;

export const AvatarCard = styled(GlassCard)`
  padding: 10px;
  border-radius: 24px;
  z-index: 1;
  display: inline-block;
  
  img {
    width: 280px;
    height: 280px;
    border-radius: 20px;
    object-fit: cover;
    display: block;
  }
`;

const girar = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

// Envolve a imagem sem mudar o tamanho dela (280x280).
// O anel gradiente ocupa o espaço do padding de 10px do AvatarCard.
export const AvatarRing = styled.div`
  position: relative;
  display: block;

  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 26px;
    background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
    animation: ${girar} 1.5s linear infinite;
    z-index: 0;
  }

  img {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MainTitle = styled.h1`
  font-size: 2.1rem;
  line-height: 1.2;
  font-weight: 800;
  color: ${(props) => props.theme.textPrimary};

  span {
    background: ${(props) => props.theme.gradient};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textPrimary};
  line-height: 1.6;
  max-width: 540px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  padding: 14px 28px;
  background: ${(props) => props.theme.accentCyan};
  color: #0d1117;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 20px ${(props) => props.theme.darkGray};
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.a`
  padding: 14px 28px;
  border: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.textPrimary};
  font-weight: 600;
  border-radius: 8px;
  background: ${(props) => props.theme.darkGray};
  backdrop-filter: blur(5px);
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.darkGray};
    border-color: ${(props) => props.theme.textSecondary};
  }
`;