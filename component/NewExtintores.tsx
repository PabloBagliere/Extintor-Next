/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Formik, Form } from 'formik';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { dataClass, dataTypes, typesButton, typesInput } from 'Utils/Data';
import ExtintorDTO from 'Utils/ExtiontorDTO';
import SchemaValided from 'Utils/extinguisherValidate';

const baseExtintor: ExtintorDTO = {
  brand: '',
  capacity: 0,
  class: dataClass[0].value,
  extirationDate: '',
  hidraulico: '',
  isService: true,
  photo: '',
  type: dataTypes[0].value,
  ubication: '',
};

export default function Extintor(): JSX.Element {
  return (
    <div className="mt-2">
      <Formik
        initialValues={baseExtintor}
        validationSchema={SchemaValided}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="flex flex-wrap justify-end">
            <div className="flex justify-between justify-items-center w-full my-1">
              <label htmlFor="brand" className="my-auto">
                Marca:
              </label>
              <Field
                name="brand"
                component={Input}
                className="rounded-md"
                error={errors.brand && touched.brand ? true : false}
                placeholder="Marca"
              />
            </div>
            {errors.brand && touched.brand ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.brand}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="capacity" className="my-auto">
                Capacidad:
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <Field
                  name="capacity"
                  component={Input}
                  className=" rounded-l-md rounded-r-none"
                  placeholder="Capacidad"
                  type={typesInput.number}
                  error={errors.capacity && touched.capacity ? true : false}
                ></Field>
                <span className="inline-flex items-center px-1 rounded-r-md border rounded-l-none border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  Kg
                </span>
              </div>
            </div>
            {errors.capacity && touched.capacity ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.capacity}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="class" className="my-auto">
                Clase:
              </label>
              <Field
                name="class"
                component={Select}
                className="rounded-md"
                error={errors.class && touched.class ? true : false}
              >
                {dataClass.map((data, k) => {
                  return (
                    <option value={data.value} key={k}>
                      {data.label}
                    </option>
                  );
                })}
              </Field>
            </div>
            {errors.class && touched.class ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.class}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="extirationDate" className="my-auto">
                Expiracion:
              </label>
              <Field
                name="extirationDate"
                component={Input}
                type={typesInput.date}
                className="rounded-md"
                error={
                  errors.extirationDate && touched.extirationDate ? true : false
                }
              />
            </div>
            {errors.extirationDate && touched.extirationDate ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.extirationDate}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="hidraulico" className="my-auto">
                Ultima hidraulica:
              </label>
              <Field
                name="hidraulico"
                component={Input}
                type={typesInput.date}
                className="rounded-md"
                error={errors.hidraulico && touched.hidraulico ? true : false}
              />
            </div>
            {errors.hidraulico && touched.hidraulico ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.hidraulico}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="ubication" className="my-auto">
                Ubicacion:
              </label>
              <Field
                name="ubication"
                component={Input}
                className="rounded-md"
                placeholder="Ubicacion"
                error={errors.ubication && touched.ubication ? true : false}
              />
            </div>
            {errors.ubication && touched.ubication ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.ubication}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1">
              <label htmlFor="type" className="my-auto">
                Tipos:
              </label>
              <Field
                name="type"
                component={Select}
                className="rounded-md"
                error={errors.type && touched.type ? true : false}
              >
                {dataTypes.map((type, k) => {
                  return (
                    <option value={type.value} key={k}>
                      {type.label}
                    </option>
                  );
                })}
              </Field>
            </div>
            {errors.type && touched.type ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.type}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1 mb-3">
              <label htmlFor="photo" className="my-auto">
                Foto:
              </label>
              <Field
                name="photo"
                type="file"
                accept="image/png, image/jpeg"
                className="w-52"
              />
            </div>
            {errors.photo && touched.photo ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.photo}
              </span>
            ) : null}
            <div className="flex justify-between w-full my-1 mb-3">
              <label htmlFor="isService" className="my-auto">
                ¿En servicio?:
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <Field
                  name="isService"
                  type={typesInput.checkbox}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                />
              </div>
            </div>
            {errors.isService && touched.isService ? (
              <span className="text-right font-medium tracking-wide text-red-500 text-xs">
                {errors.isService}
              </span>
            ) : null}
            <Button
              type={typesButton.submit}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disable={isSubmitting}
            >
              Crear
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
