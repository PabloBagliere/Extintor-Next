export enum typesButton {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum typesInput {
  button = 'button',
  checkbox = 'checkbox',
  color = 'color',
  date = 'date',
  datetimeLocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  search = 'search',
  submit = 'submit',
  tel = 'tel',
  text = 'text',
  url = 'url',
  week = 'week',
}

export const dataClass: Array<optionSelect> = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'D', label: 'D' },
  { value: 'K', label: 'K' },
  { value: 'AB', label: 'AB' },
  { value: 'BC', label: 'BC' },
  { value: 'AC', label: 'AC' },
  { value: 'ABC', label: 'ABC' },
];

export const dataTypes: Array<optionSelect> = [
  { value: 'AC', label: 'Agua a chorro' },
  { value: 'AP', label: 'Agua pulverizada' },
  { value: 'E', label: 'Espuma' },
  { value: 'AFFF', label: 'Agua y espuma' },
  { value: 'PU', label: 'Polvo universal' },
  { value: 'PS', label: 'Polvo seco' },
  { value: 'PQ', label: 'Polvo químico' },
  { value: 'CO2', label: 'CO2' },
  { value: 'H', label: 'Halogenados' },
  { value: 'ADP', label: 'Acetato de potasio' },
];

export interface optionSelect {
  value: string;
  label: string;
}
