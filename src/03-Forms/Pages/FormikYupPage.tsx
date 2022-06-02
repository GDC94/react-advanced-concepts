import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormikValues {
  nombre: string;
  apellido: string;
  email: string;
}

export default function FormikYupPage() {
  const validate = ({ nombre, apellido, email }: FormikValues) => {
    const errors: FormikErrors<FormikValues> = {};

    if (!nombre) {
      errors.nombre = "Required";
    } else if (nombre.length >= 15) {
      errors.nombre = "Must be 15 characters or less";
    }

    if (!apellido) {
      errors.apellido = "Required";
    } else if (apellido.length >= 10) {
      errors.apellido = "Must be 10 characters or less";
    }

    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik - Yup </h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          onBlur={ handleBlur}
          onChange={handleChange}
          value={values.nombre}
        />
        {touched.nombre && errors.nombre && <span>{errors.nombre}</span>}

        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          onBlur={ handleBlur}
          onChange={handleChange}
          value={values.apellido}
        />
        {touched.apellido && errors.apellido && <span>{errors.apellido}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onBlur={ handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
