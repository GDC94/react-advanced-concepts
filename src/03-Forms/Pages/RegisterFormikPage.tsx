import useForm from "../hooks/useForm";
import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export default function RegisterFormikPage() {
  return (
    <div>
      <h1>Register form con Formik </h1>

      <Formik
        initialValues={{
          nombre: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .min(2, "mm no conozco ese nombre!")
            .max(15, "El nombre debe tener 15 caracteres o menos")
            .required("Required"),
          email: Yup.string()
            .email("Ese correo es inválido!")
            .required("Required"),
          password: Yup.string()
            .required("Debes ingresar una contraseña")
            .min(8, "Debe tener ocho caracteres como minimo")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
          password2: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"Nombre"}
              name={"nombre"}
              placeholder={"Tu nombre"}
            />
            <MyTextInput
              label={"Email"}
              name={"email"}
              placeholder={"Tu email"}
            />

            <MyTextInput
              label={"Contraseña"}
              name={"password"}
              placeholder={"Elige una contraseña"}
            />
            <MyTextInput
              label={"Confirmar contraseña"}
              name={"password2"}
              placeholder={"Repite"}
            />

            <button type="submit">Create account</button>
            <button type="button" onClick={formik.handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
