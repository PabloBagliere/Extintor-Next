import * as Yup from 'yup';

const today = new Date();

const future = today;
future.setFullYear(new Date().getFullYear() + 5);

const past = today;
past.setFullYear(new Date().getFullYear() - 5);

const extinguisherSchema = Yup.object().shape({
  brand: Yup.string()
    .min(3, 'Nombre de la marca minimo 3 letras')
    .required('Es requerido'),
  capacity: Yup.number()
    .min(2, 'Como minimo tiene que pesar 2 Kg ')
    .max(500, 'No puede tener capacidad mayor a 500 Kg')
    .required('Es requerido'),
  class: Yup.string()
    .min(1, 'Como minimo son 1 letras')
    .max(255, 'No puede tener mas de 255 letras')
    .required('Es requerido'),
  extirationDate: Yup.date()
    .min(today, 'No puedes cargar si vencio antes')
    .max(future, 'No puede superar el vencimiento a 5 años')
    .required('Es requerido'),
  hidraulico: Yup.date()
    .min(past, 'No puedes cargar si vencio antes')
    .max(future, 'No puede superar el vencimiento a 5 años')
    .required('Es requerido'),
  isService: Yup.boolean().required('Es requerido'),
  type: Yup.string()
    .min(1, 'Como minimo son 1 letras')
    .max(255, 'No puede tener mas de 255 letras')
    .required('Es requerido'),
  ubication: Yup.string()
    .min(4, 'Como minimo son 4 letras')
    .max(255, 'No puede tener mas de 255 letras')
    .required('Es requerido'),
});

export default extinguisherSchema;
