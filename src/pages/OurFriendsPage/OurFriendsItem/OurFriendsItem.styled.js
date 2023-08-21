import styled from 'styled-components';
import variables from 'settings/variables';

export const FriendCard = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  box-shadow: ${variables.shadow.shadowDefault};
  background-color: ${variables.colors.cardBgColor};
  max-width: 280px;
  padding: 16px 12px;
  transition: 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

  ${variables.breakPoints.tablet} {
    min-width: 336px;
  }

  ${variables.breakPoints.desktop} {
    min-width: 394px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: ${variables.shadow.shadowHover};
  }

  cursor: pointer;
`;

export const FriendTitle = styled.a`
  display: block;
  color: ${variables.colors.buttonsHoverBg};
  text-align: center;
  margin-bottom: 16px;
  font-size: 20px;
  min-height: 54px;
`;

export const FriendImageThumb = styled.div``;

export const FriendImg = styled.img`
  width: 100px;
  height: 68px;

  ${variables.breakPoints.tablet} {
    width: 124px;
    height: 88px;
  }

  ${variables.breakPoints.desktop} {
    width: 146px;
    height: 104px;
  }
`;

export const FriendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 2;
`;

export const FriendThumb = styled.div`
  display: flex;
  gap: 12px;
`;

export const FriendInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  &:hover {
    color: ${variables.colors.buttonsHoverBg};
  }

  &:hover > a {
    color: ${variables.colors.buttonsHoverBg};
  }
`;

export const FriendInfoTitle = styled.p`
  font-size: 12px;
  font-weight: 600;

  ${variables.breakPoints.tablet} {
    font-size: 14px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;

export const FriendInfoData = styled.a`
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: ${variables.colors.text};

  ${variables.breakPoints.tablet} {
    font-size: 14px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;

export const FriendAdress = styled.a`
  font-size: 12px;
  color: ${variables.colors.text};

  ${variables.breakPoints.tablet} {
    min-height: 58px;
    font-size: 14px;
  }

  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;

export const WorkDaysList = styled.ul`
  position: absolute;
  top: 130px;
  right: 25px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 130px;
  height: auto;
  padding: 12px;

  border-radius: 8px;
  border: 1px solid ${variables.colors.buttonsHoverBg};

  box-shadow: ${variables.shadow.shadowDefault};

  background-color: ${variables.colors.secondaryText};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${variables.breakPoints.tablet} {
    right: 60px;
  }

  ${variables.breakPoints.desktop} {
    right: 95px;
  }
`;

export const WorkDayItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  font-weight: 500;
`;

export const WorkDays = styled.p`
  color: ${variables.colors.text};
`;

export const WorkTime = styled.p`
  color: ${variables.colors.text};
`;