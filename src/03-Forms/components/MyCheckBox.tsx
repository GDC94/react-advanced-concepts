import { ErrorMessage, useField } from "formik";

interface TextInputProps {
  label: string;
  name: string;
  [x: string]: any;
}
export const MyCheckBox = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};

export default MyCheckBox;
