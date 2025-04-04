export interface IFormField {
    type: string;
    name: string;
    placeholder: string;
    label: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  } 