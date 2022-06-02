import { Formik, Field, ErrorMessage, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export default function FormikComponent() {
  return (
    <div>
      <h1>Formik Component </h1>

      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .min(2, "mm no conozco ese nombre!")
            .max(15, "El nombre debe tener 15 caracteres o menos")
            .required("Required"),
          apellido: Yup.string()
            .min(2, "Oye, seguro ese es tu apellido?")
            .max(15, "El apellido debe tener 15 caracteres o menos")
            .required("Required"),
          email: Yup.string()
            .email("Ese correo es inválido!")
            .required("Required"),
          terms: Yup.boolean().oneOf([true], "Debes aceptar nuestros terminos"),
          jobType: Yup.string()
            .notOneOf(["QA"], "Esta opcion no es válida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="nombre">Nombre</label>
            <Field name={"nombre"} type="text" placeholder='Pon tu nombre'/>
            <ErrorMessage name={"nombre"} component={"span"} />

            <label htmlFor="apellido">Apellido</label>
            <Field name={"apellido"} type="text" />
            <ErrorMessage name={"apellido"} component="span" />

            <label htmlFor="email">Email</label>
            <Field name={"email"} type="text" />
            <ErrorMessage name={"email"} component="span" />

            <label>
              <Field name={"terms"} type="checkbox" />
              Términos y condiciones
            </label>
            <ErrorMessage name={"terms"} component="span" />

            <label htmlFor="jobType">JobType</label>
            <Field name={"jobType"} as={"select"}>
              <option value="">Elige alguna opcion</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOp">DevOp</option>
              <option value="QA">QA</option>
            </Field>
            <ErrorMessage name={"jobType"} component="span" />

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
