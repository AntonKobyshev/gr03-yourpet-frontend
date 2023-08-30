import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email format is incorrect")
    .required("Enter a valid Email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be at most 16 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,
      "For security, your password should include an uppercase letter, a lowercase letter, and a digit"
    ),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please fill in your name")
    .min(2, "Name should be at least 2 characters")
    .max(16, "Name should be at most 16 characters")
    .matches(/^[a-zA-Z\s]*$/),
  email: yup
    .string()
    .email("Email format is incorrectl")
    .required("Email is required")
    .matches(
      /^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
      "Email format is incorrect"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be at most 16 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z]{6,})*$/,
      "For security, your password should include an uppercase letter, a lowercase letter, and a digit"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const userFormSchema = yup.object().shape({
  avatar: yup
    .mixed()
    .required("Avatar is required")
    .test("fileSize", "The file is too large", (value) => {
      if (!value.length) return true;
      return value[0].size <= 3000000; // максимальний розмір файлу 3 МБ
    }),
  name: yup.string().required("Please fill in your name").trim(),
  email: yup
    .string()
    .required("Email is required")
    .email("Email format is incorrect")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Email format is incorrect"
    )
    .trim(),
  birthday: yup
    .string()
    .required("Birthday is required")
    .matches
    // /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
    // "Invalid date format (DD-MM-YYYY)"
    (),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(
      /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
      "Invalid phone format"
    ),
  city: yup.string().required("City is required"),
});

