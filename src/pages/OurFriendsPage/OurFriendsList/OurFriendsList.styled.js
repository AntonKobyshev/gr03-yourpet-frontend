import styled from 'styled-components';
import variables from 'settings/variables';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom:70px;

  ${variables.breakPoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;