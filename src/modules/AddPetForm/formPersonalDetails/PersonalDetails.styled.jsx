import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

export const PersonalDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
/
`;

export const Label = styled.label`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: calc(19 / 14);
  color: #111111;


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

`;
