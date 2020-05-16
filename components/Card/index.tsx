import styled from 'styled-components';
import Box from '@components/Box';

const StyledCard = styled.div`
  display: flex;
  background-color: #4ac750;
  border: 1px solid #777;
  margin: 8px 0;

  @media (max-width: 567px) {
    flex-direction: column;
    margin: 8px 0;

    .image-container {
      img {
        width: 100%;
        height: 250px;
      }
    }
  }
`;

const Card = ({ imageUrl, title, description, color, bg, index }) => {
  return (
    <StyledCard>
      <div className="image-container">
        <img src={imageUrl} alt={`image-${index}`}/>
      </div>
      <Box p={[2, 3]} bg={bg} color={color}>
        <Box color={color} fontWeight={5} as="h3">{title}</Box>
        <p>{description}</p>
      </Box>
    </StyledCard>
  );
};

export default Card;
