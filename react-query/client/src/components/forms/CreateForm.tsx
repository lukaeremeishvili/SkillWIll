import React, { FormEvent, ReactNode, useState } from "react";
import { IFormField } from "../../interfaces/form-field.interface";
import FormInput from "./FormInput";

interface CreateFormProps {
  fields: IFormField[];
  action: (formData: Record<string, string>) => void;
  formBtn: ReactNode;
}

const CreateForm: React.FC<CreateFormProps> = ({ fields, action, formBtn }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    action(formData);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="p-2  border border-gray-300 m-5">
      {fields.map(({ label, name, placeholder, type }) => (
        <FormInput key={name} label={label} name={name} placeholder={placeholder} type={type} handleChange={handleChange}/>
      ))}
      {formBtn}
    </form>
  );
};

export default CreateForm;
