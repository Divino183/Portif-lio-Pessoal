import styled from "styled-components";

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    height: 280px; 
    background: ${props => props.theme.surface}; 
    border-Radius: 8px; 
    margin-Bottom: 20px;

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    h3 {
        margin-bottom: 10px;
    }

    p {
        color: ${props => props.theme.textSecondary};
        font-size: 0.9rem;
        margin-bottom: 20px ;
    }
`

export const TagsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  justify-items: center;
  align-items: center;
`;

export const Tag = styled.div`
  background: ${(props) => props.theme.gren};
  color: ${(props) => props.theme.accentCyan};
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.50rem;
  text-align: center;
`;