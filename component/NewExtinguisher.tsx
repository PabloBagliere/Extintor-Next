/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './Input';
import Button from './Button';
import Select from './Select';
import { dataClass, dataTypes, typesButton, typesInput } from 'Utils/Data';
import DTOExtinguisher from 'Utils/ExtinguisherDTO';
import SchemaValided from 'Utils/extinguisherValidate';
import { createExtinguisher } from 'firebase/client';

export default function Extintor(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<DTOExtinguisher>({
    resolver: yupResolver(SchemaValided),
  });
  const onSubmit = (values: DTOExtinguisher): void => {
    setLoading(!loading);
    values.photo = values.photo[0];
    console.log(values);
    createExtinguisher(values);
    setLoading(!loading);
  };
  return (
    <div className="mt-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap justify-end"
      >
        <div className="flex justify-between justify-items-center w-full my-1">
          <label htmlFor="brand" className="my-auto">
            Marca:
          </label>
          <Input
            name="brand"
            className="rounded-md"
            inputRef={register}
            error={errors.brand ? true : false}
            placeholder="Marca"
          />
        </div>
        {errors.brand ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.brand?.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="capacity" className="my-auto">
            Capacidad:
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <Input
              name="capacity"
              inputRef={register}
              className=" rounded-l-md rounded-r-none"
              placeholder="Capacidad"
              type={typesInput.number}
              error={errors.capacity ? true : false}
            />
            <span className="inline-flex items-center px-1 rounded-r-md border rounded-l-none border-gray-300 bg-gray-50 text-gray-500 text-sm">
              Kg
            </span>
          </div>
        </div>
        {errors.capacity ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.capacity.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="class" className="my-auto">
            Clase:
          </label>
          <Select
            name="class"
            inputRef={register}
            className="rounded-md"
            error={errors.class ? true : false}
          >
            {dataClass.map((data, k) => {
              return (
                <option value={data.value} key={k}>
                  {data.label}
                </option>
              );
            })}
          </Select>
        </div>
        {errors.class ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.class.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="extirationDate" className="my-auto">
            Expiracion:
          </label>
          <Input
            name="extirationDate"
            inputRef={register}
            type={typesInput.date}
            className="rounded-md"
            error={errors.extirationDate ? true : false}
          />
        </div>
        {errors.extirationDate ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.extirationDate.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="hidraulico" className="my-auto">
            Ultima hidraulica:
          </label>
          <Input
            name="hidraulico"
            inputRef={register}
            type={typesInput.date}
            className="rounded-md"
            error={errors.hidraulico ? true : false}
          />
        </div>
        {errors.hidraulico ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.hidraulico.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="ubication" className="my-auto">
            Ubicacion:
          </label>
          <Input
            name="ubication"
            inputRef={register}
            className="rounded-md"
            placeholder="Ubicacion"
            error={errors.ubication ? true : false}
          />
        </div>
        {errors.ubication ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.ubication.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1">
          <label htmlFor="type" className="my-auto">
            Tipos:
          </label>
          <Select
            name="type"
            inputRef={register}
            className="rounded-md"
            error={errors.type ? true : false}
          >
            {dataTypes.map((type, k) => {
              return (
                <option value={type.value} key={k}>
                  {type.label}
                </option>
              );
            })}
          </Select>
        </div>
        {errors.type ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.type.message}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1 mb-3">
          <label htmlFor="photo" className="my-auto">
            Foto:
          </label>
          <Input
            name="photo"
            inputRef={register}
            type={typesInput.file}
            className="w-52"
          />
        </div>
        {errors.photo ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.photo}
          </span>
        ) : null}
        <div className="flex justify-between w-full my-1 mb-3">
          <label htmlFor="isService" className="my-auto">
            ¿En servicio?:
          </label>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <Input
              name="isService"
              inputRef={register}
              type={typesInput.checkbox}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
        </div>
        {errors.isService ? (
          <span className="text-right font-medium tracking-wide text-red-500 text-xs">
            {errors.isService.message}
          </span>
        ) : null}
        <Button
          type={typesButton.submit}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disable={loading}
        >
          Crear
        </Button>
      </form>
    </div>
  );
}
