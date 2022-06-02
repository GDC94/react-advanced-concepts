import { ErrorMessage, useField } from "formik";

interface TextInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  //Para poder recibir cualquier cosa.
  [x: string]: any;
}
export const MyTextInput = ({ label, ...props }: TextInputProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MyTextInput;
