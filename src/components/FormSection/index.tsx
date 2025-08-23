"use client";

import classNames from "classnames";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FieldConfig, FormInputs } from "../ShipmentForm";

interface FormSectionProps {
  title: string
  register: UseFormRegister<FormInputs>
  errors: FieldErrors<FormInputs>
  group: keyof FormInputs
  fields: Record<string, FieldConfig>
}

function getFieldName(group: string, name: string) {
  return group ? `${group}.${name}` : name;
};

function FormSection({
  title = "Adress",
  register,
  errors,
  fields,
  group,
}: FormSectionProps) {
  return (
    <>
      <h2 className="mb-4 text-4xl font-extrabold text-black">{title}</h2>
      {Object.values(fields).map(({ name, isRequired, type }) => (
        <div key={name} className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={name}
          >
            {name.toUpperCase()}
          </label>
          <input
            {...register(getFieldName(group, name), {required: isRequired })}
            id={name}
            className={classNames(
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
              { "border-red-500": errors[group]?.[name]?.type === "required" }
            )}
            {...{ type }}
          />
        </div>
      ))}
    </>
  );
};

export default FormSection;
