import useUpdateTodo from "../../hooks/mutations/todo/useUpdateTodo";
import { IFormField } from "../../interfaces/form-field.interface";
import CreateForm from "../forms/CreateForm";

const UpdateTodo = ({
  todo,
}: {
  todo: { id: number; title: string; description: string };
}) => {
  const updateTodo = useUpdateTodo();

  const fields: IFormField[] = [
    {
      label: "Title",
      name: "title",
      placeholder: "Enter new title",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Enter new description",
      type: "text",
    },
  ];

  const handleUpdate = (formData: Record<string, string>) => {
    updateTodo.mutate(
      {
        id: todo.id,
        data: {
          title: formData.title,
          description: formData.description,
        },
      },
    );
  };

  return (
    <CreateForm
      fields={fields}
      action={handleUpdate}
      formBtn={
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Update
        </button>
      }
    />
  );
};

export default UpdateTodo;
