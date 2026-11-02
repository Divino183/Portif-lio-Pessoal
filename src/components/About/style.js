import styled from "styled-components";
import { GlassCard } from "../SharedStyles";

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ProfileImg = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid ${props => props.theme.accentCyan};

    @media (max-width: 768px) {
        margin: 0 auto;
        display: block;
        width: 200px;
    }
`;

export const TechGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 30px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const TechItem = styled(GlassCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  font-size: 0.9rem;
  padding: 15px;
`;