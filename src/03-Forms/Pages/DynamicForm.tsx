import { Formik, Form } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import data from "../data/formData.json";

const initialValues: { [key: string]: any } = {};
for (const input of data) {
  initialValues[input.name] = input.value;
}

export default function DynamicForm() {
  return (
    <div>
      <h1>Formulario dinamico</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {data.map(({ label, name, type, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value="">Selecciona tu jugador</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelectInput>
                );
              } else {
                return <h2>Type no soportado</h2>;
              }
            })}
            <button type="submit">Enviar </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
