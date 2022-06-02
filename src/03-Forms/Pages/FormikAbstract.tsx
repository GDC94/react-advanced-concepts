import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import {MyCheckBox, MyTextInput, MySelectInput} from "../components";


export default function FormikAbstract() {
  return (
    <div>
      <h1>Formik Abstract Component </h1>

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
            <MyTextInput placeholder="nombre" name="nombre" label="nombre" />
            <MyTextInput
              placeholder="apellido"
              name="apellido"
              label="apellido"
            />

            <MyTextInput
              type="email"
              placeholder="Tu correo"
              name="email"
              label="Correo"
            />

            <MyCheckBox label="Términos y condiciones" name="terms" />

            <MySelectInput name={"jobType"} label="Job Type">
              <option value="">Elige alguna opcion</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="DevOp">DevOp</option>
              <option value="QA">QA</option>
            </MySelectInput>

            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
