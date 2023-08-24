import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
export const PersonalDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: ${props => (props.category === 'your pet' ? 44 : 24)}px;
`;

export const Point = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  
  line-height: calc(19 / 14);
  color: #111111;

  > div {
    position: absolute;
    bottom: -15px;
    left: 20px;
    font-size: 12px;
    font-weight: 400;
    line-height: calc(16 / 12);
    color: #f43f5e;
  }
`;

export const Message = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  left: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: calc(16 / 12);
  color: #f43f5e;
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

