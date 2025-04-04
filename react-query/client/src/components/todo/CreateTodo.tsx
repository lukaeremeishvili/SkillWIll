import React from "react";
import CreateForm from "../forms/CreateForm";
import { IFormField } from "../../interfaces/form-field.interface";
import useCreateTodo from "../../hooks/mutations/todo/useCreateTodo";

const CreateTodo: React.FC = () => {
  const { mutate } = useCreateTodo();

  const fields: IFormField[] = [
    { name: "title", placeholder: "Todo title", label: "Title", type: "text" },
    {
      name: "description",
      placeholder: "Todo description",
      label: "Description",
      type: "text",
    },
  ];

  const createBtn = () => {
    return (
      <button
        type="submit"
        className="border border-gray-200 p-2 w-full cursor-pointer hover:bg-green-500 hover:text-white rounded-full transition-all duration-200 ease-in-out"
      >
        Create Todo
      </button>
    );
  };

  const onSubmit = (formData: Record<string, string>) => {
    mutate(formData);
  };
  return <CreateForm fields={fields} formBtn={createBtn()} action={onSubmit} />;
};

export default CreateTodo;
