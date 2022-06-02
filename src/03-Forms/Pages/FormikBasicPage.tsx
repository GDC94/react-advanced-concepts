import { useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export default function FormikBasicPage() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(2, "mm no conozco ese nombre!")
        .max(15, "El nombre debe tener 15 caracteres o menos")
        .required("Required"),
      apellido: Yup.string()
        .min(2, "Oye, seguro ese es tu apellido?")
        .max(15, "El apellido debe tener 15 caracteres o menos")
        .required("Required"),
      email: Yup.string().email("Ese correo es inválido!").required("Required"),
    }),
  });

  return (
    <div>
      <h1>Formik Basic </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" {...getFieldProps("nombre")} />
        {touched.nombre && errors.nombre && <span>{errors.nombre}</span>}

        <label htmlFor="apellido">Apellido</label>
        <input type="text" {...getFieldProps("apellido")} />
        {touched.apellido && errors.apellido && <span>{errors.apellido}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
