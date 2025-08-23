"use client";

import { ADRESS_FIELDS, PARCEL_FIELDS } from "@/consts";
import { SubmitHandler, useForm } from "react-hook-form"
import FormSection from "../FormSection";

const FORM_GROUPS = {
  FROM: "from",
  TO: "to",
  PARCEL: "parcel",
};

const FORM_FIELDS = {
  [FORM_GROUPS.FROM]: ADRESS_FIELDS,
  [FORM_GROUPS.TO]: ADRESS_FIELDS,
  [FORM_GROUPS.PARCEL]: PARCEL_FIELDS,
} as const;

type FieldConfig = {
  name: string;
  isRequired: boolean;
  type: "text" | "number";
};

type FieldsGroup = Record<string, FieldConfig>;

type FieldsToType<T extends FieldsGroup> = {
  [K in keyof T as T[K]["name"]]: T[K]["type"] extends "number"
    ? number
    : string;
};

type Inputs = {
  FROM: FieldsToType<typeof FORM_FIELDS.FROM>;
  TO: FieldsToType<typeof FORM_FIELDS.TO>;
  PARCEL: FieldsToType<typeof FORM_FIELDS.PARCEL>;
};

interface ShipmentFormProps {}

function ShipmentForm({}: ShipmentFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log("errors", errors);

  return (
      <div className="w-full">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <FormSection {...{
            title: "From",
            register,
            fields: FORM_FIELDS[FORM_GROUPS.FROM],
            group: FORM_GROUPS.FROM,
            errors,
          }} />
          <FormSection {...{
            title: "To",
            register,
            fields: FORM_FIELDS[FORM_GROUPS.TO],
            group: FORM_GROUPS.TO,
            errors,
          }} />
          <FormSection {...{
            title: "Parcel",
            register,
            fields: FORM_FIELDS[FORM_GROUPS.PARCEL],
            group: FORM_GROUPS.PARCEL,
            errors,
          }} />
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default ShipmentForm;
