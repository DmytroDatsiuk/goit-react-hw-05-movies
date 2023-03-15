import styled from 'styled-components';
import { Form as FormikForm, Field as FastField } from 'formik';

export const Form = styled(FormikForm)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #47ced3;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Field = styled(FastField)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #47ced3;
  color: white;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
