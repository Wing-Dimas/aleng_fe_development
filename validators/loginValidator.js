const { object, string } = require("yup");

let loginSchema = object().shape({
  email: string("Email tidak valid")
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  password: string("Password tidak valid")
    .min(8, "Password harus lebih dari 8 karakter")
    .required("Password tidak boleh kosong"),
});

const validateLogin = async (form) => {
  try {
    const res = await loginSchema.validate(form, { abortEarly: false });
    // return back form
    return { isError: false, form };
  } catch (err) {
    let paths = [];
    let errors = {};
    err.inner.forEach((e) => {
      if (!paths.includes(e.path)) {
        paths.push(e.path);
        errors[e.path] = { isError: true, message: e.message };
      }
    });
    return { isError: true, form: errors };
  }
};

export default validateLogin;
