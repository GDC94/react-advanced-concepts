import { ErrorMessage, useField } from "formik";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  //Para poder recibir cualquier cosa.
  [x: string]: any;
}
export const MySelectInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MySelectInput;
