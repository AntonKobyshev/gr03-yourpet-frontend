import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const MoreInfoBlock = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'flex' : 'block'};
    gap: 45px;
  }

  @media (min-width: 1280px) {
    gap: 79px;
  }
`;

export const GenderBlock = styled.div`
  position: relative;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  > div {
    display: flex;
    gap: 23px;
  }
`;

export const GenderTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #111111;
  line-height: 1.36;
`;

export const GenderLabelBlock = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: ${props => (props.checked ? '#00C3AD' : '#888888')};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  will-change: transform;

  :hover {
    transform: scale(1.05);
  }

  > input {
    visibility: hidden;
    height: 0;
    width: 0;
  }
`;

export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? 'block' : 'flex'};
  }
`;

export const PhotoText = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #111111;
  line-height: 1.36;
  width: 81px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '200px' : '114px'};
    margin-bottom: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '8px' : '0'};
  }
`;

export const AddPoint = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cce4fb;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media (min-width: 768px) {
      border-radius: 40px;
    }
  }

  > div {
    width: 200px;
    left: 0;
  }
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 24px;
    width: ${props =>
      props.category !== 'my-pet' && props.step === 2 ? '395px' : '100%'};
  }
`;

export const Point = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  color: #111111;
  line-height: 1.36;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 9px 15px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  border-radius: 40px;
  border: 1px solid;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};
`;

export const PointComment = styled.label`
  position: relative;
  display: block;
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
`;

export const TextArea = styled(Field)`
  width: 100%;
  height: 92px;
  weight: 500;
  padding: 9px 15px;
  margin-top: 4px;
  color: #888888;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  resize: none;
  outline: none;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${props => (props.errors ? '#f43f5e' : '#54ADFF')};

  @media (min-width: 768px) {
    height: ${props =>
      props.category === 'lost-found' ||
      (props.category === 'for-free' && props.step === 2)
        ? '182px'
        : '79px'};
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  left: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #f43f5e;
  line-height: 1.33;
`;