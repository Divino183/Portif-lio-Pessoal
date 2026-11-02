import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 8%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  /* Garante que a rolagem pare antes de encostar no menu fixo */
  scroll-margin-top: 80px; 
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
  font-weight: 700;
  span {
    background: ${(props) => props.theme.gradient};
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const GlassCard = styled.div`
  background: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 30px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.gren};
  }
`;
