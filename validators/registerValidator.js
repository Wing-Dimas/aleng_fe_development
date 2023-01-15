const { object, string, number, ref, transform } = require("yup");

let registerSchema = object().shape({
  name: string("Nama tidak valid").required("Nama tidak boleh kosong"),
  email: string("Email tidak valid")
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  phoneNumber: number("Nomor Telepon tidak valid")
    .typeError("Nomor Telepon tidak valid")
    .test(
      "len",
      "Nomor Telepon harus lebih dari 11 karakter",
      (val) => val.toString().length > 11
    )
    .required("Nomor Telepon tidak boleh kosong")
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  password: string("Password tidak valid")
    .min(8, "Password harus lebih dari 8 karakter")
    .required("Password tidak boleh kosong"),
  password_confirmation: string("Password tidak valid").oneOf(
    [ref("password"), null],
    "Password tidak sama"
  ),
});

const validateRegister = async (form) => {
  try {
    const res = await registerSchema.validate(form, { abortEarly: false });
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

export default validateRegister;
