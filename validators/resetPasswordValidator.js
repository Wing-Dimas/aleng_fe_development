const { object, string, ref } = require("yup");

let resetPasswordSchema = object().shape({
  password: string("Password tidak valid")
    .min(8, "Password harus lebih dari 8 karakter")
    .required("Password tidak boleh kosong"),
  password_confirmation: string("Password tidak valid").oneOf(
    [ref("password"), null],
    "Password tidak sama"
  ),
});

const validateResetPassword = async (form) => {
  try {
    const res = await resetPasswordSchema.validate(form, { abortEarly: false });
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

export default validateResetPassword;
