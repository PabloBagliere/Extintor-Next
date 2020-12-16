import { FieldProps } from 'formik';

export interface DTOSelect extends FieldProps {
  className: string;
  children: (JSX.Element | string)[] | JSX.Element | string;
  error: boolean;
}
