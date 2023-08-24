import styled from '@emotion/styled';

export const AddPetFormWrapper = styled.div`
  margin: 0 auto;
  max-width: 458px;
  padding: 20px 8px;
  margin-top: 40px;

  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media (min-width: 768px) {
    padding: 20px 32px;
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '704px' : '458px'};
  }

  @media (min-width: 1280px) {
    max-width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '822px' : '458px'};
    padding: ${props =>
      props.category !== 'my-pet' && props.step === 2
        ? '30px 75px'
        : '20px 32px'};
  }
`;

export const PetFormTitle = styled.h1`
  margin-bottom: 24px;
  margin-left: 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: calc(27 / 20);
  color: #111111;

  @media (min-width: 768px) {
    margin-left: 0;
    text-align: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'center' : 'left'};
  }
`;

export const StepsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    gap: 16px;
    margin-bottom: ${props => (props.step === 0 ? '60px' : '36px')};
  }
`;

export const Step = styled.li`
  position: relative;
  width: 80px;
  font-size: 10px;
  line-height: calc(14 / 10);
  font-weight: 500;
  color: ${props => {
    if (props.step === 0) {
      return props.index === 0 ? '#54ADFF' : '#888888';
    } else if (props.step === 1) {
      return props.index === 0
        ? '#00C3AD'
        : props.index === 1
        ? '#54ADFF'
        : '#888888';
    } else if (props.step === 2) {
      return props.index < 2 ? '#00C3AD' : '#54ADFF';
    }
  }};

  @media (min-width: 768px) {
    width: 120px;
    font-size: 16px;
    line-height: calc(26 / 26);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      if (props.step === 0) {
        return props.index === 0 ? '#54ADFF' : '#CCE4FB';
      } else if (props.step === 1) {
        return props.index === 0
          ? '#00C3AD'
          : props.index === 1
          ? '#54ADFF'
          : '#CCE4FB';
      } else if (props.step === 2) {
        return props.index < 2 ? '#00C3AD' : '#54ADFF';
      }
    }};
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 32px;
  }
`;

export const ButtonFilled = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 248px;
  height: 40px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: #fef9f9;
  letter-spacing: 0.04em;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  background-position: 0 0, center;
  background-size: 0% 0%, cover;
  background-repeat: no-repeat;
  background-color: #54adff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    background-size: 100% 100%, cover;
    transform: scale(1.05);
  }

  :disabled {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 94px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(22 / 16);
  letter-spacing: 0.04em;

  background-color: transparent;
  border: none;
  color: #54adff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;