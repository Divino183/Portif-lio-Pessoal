import styled from "styled-components";

export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;

    @media (max-width: 768px) { 
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 15px;
    background: ${props => props.theme.surface};
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 8px;
    color: ${props => props.theme.white};
    margin-bottom: 15px;

    &:focus { 
        border-color: ${(props) => props.theme.accentCyan}; 
    }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
    height: 150px;
    resize: none;
`;

export const Button = styled.button`
    width: 100%;
    padding: 15px;
    background: ${(props) => props.theme.gradient};
    color: ${props => props.theme.white};
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover { 
        opacity: 0.9; 
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    p {
        color: ${props => props.theme.text};
        margin-top: 10px;
        line-height: 1.6;
    }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  color: ${(props) => props.theme.textPrimary};
  background: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s, border-color 0.2s;

  svg {
    font-size: 28px;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.accentCyan};
  }
`;