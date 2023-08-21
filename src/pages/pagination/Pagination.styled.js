import styled from 'styled-components';
import { ReactComponent as Arrov } from 'images/icons/arrov.svg';
import variables from 'settings/variables';

export const ArrovStyle = styled(Arrov)`
  stroke: #54adff;
  }
`;

export const ArrovStyleLeft = styled(ArrovStyle)`
  transform: rotate(180deg);
`;
export const Wraper = styled.div`
  margin-bottom: 117px;

  ${variables.breakPoints.tablet} {
    margin-bottom: 209px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 112;
  }
`;