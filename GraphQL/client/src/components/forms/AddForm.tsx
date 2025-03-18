import React, { ChangeEvent, FormEvent, ReactNode, useState } from "react";

export interface FormField {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

interface AddFormProps {
  formFields: FormField[];
  onSubmit: (formData:Record<string, string>) => void;
  formBtn: ReactNode;
}

const AddForm: React.FC<AddFormProps> = ({ formFields, onSubmit, formBtn }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ label, type, placeholder, name }) => (
        <div key={label}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
      {formBtn}
    </form>
  );
};

export default AddForm;
