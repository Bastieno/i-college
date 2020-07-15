import styled from 'styled-components';
import Card from '@components/common/card';
import { MENU_ITEMS as data } from '../../../../data/index';

const StyledContainer = styled.div`
`;

const RightContent = () => (
  <StyledContainer>
    <div className="card-list">
      { data.map(({ imageUrl, title, description, color, bg }, i) => (
        <Card
          imageUrl={imageUrl}
          title={title}
          description={description}
          color={color}
          bg={bg}
          index={i}
          key={`image-${i}`}
        />
      ))}
    </div>
  </StyledContainer>
);

export default RightContent;
