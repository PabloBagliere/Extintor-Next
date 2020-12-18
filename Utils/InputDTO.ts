import { DTOBasicForm } from './BasicInputForm';
import { typesInput } from './Data';

export interface DTOInput extends DTOBasicForm {
  type?: typesInput;
}
