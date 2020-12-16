import { FieldProps } from 'formik';
import { typesInput } from './Data';

export interface DTOInput extends FieldProps {
  className: string;
  children: (JSX.Element | string)[] | JSX.Element | string;
  type: typesInput;
  error: boolean;
  placeholder?: string;
}
