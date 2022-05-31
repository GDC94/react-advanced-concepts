import useForm from "../hooks/useForm";
import "../styles/styles.css";

export default function RegisterPage() {
  const {
    onChange,
    resetForm,
    formData,
    isValidEmail,
    name,
    email,
    password,
    password2,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register form</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>El campo nombre es obligatorio</span>}

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El correo ingresado no es valido</span>}

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onChange}
          name="password"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>El campo es obligatorio</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres como minimo</span>
        )}

        <input
          type="password"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
          name="password2"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>El campo es obligatorio</span>}
        {password2.trim().length > 0 && password === password2 && (
          <span>Las contraseñas no coinciden</span>
        )}

        <button type="submit">Create account</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
}
