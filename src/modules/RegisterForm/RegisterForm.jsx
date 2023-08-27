import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, getIn } from "formik";
import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { selectIsLoading } from "../../redux/auth/auth-selectors";
import { register } from "../../redux/auth/auth-operations";
import Loader from "../../shared/components/Loader/Loader";
import { registerSchema } from "../../shared/helpers/schemas";
import css from "./registerForm.module.css";
import CheckIcon from "@mui/icons-material/Check";

const data = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const dispatch = useDispatch();
  const handleFormSubmit = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    await dispatch(register(data));
    navigate("/user");
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.myСomponent}>
        <Formik
          initialValues={data}
          onSubmit={handleFormSubmit}
          validationSchema={registerSchema}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form noValidate className={css.form} onSubmit={handleSubmit}>
              <h2 className={css.title}>{"Registration"}</h2>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  name="name"
                  type="text"
                  label="Name"
                  size="small"
                  fullWidth
                  sx={{
                    ".MuiInputBase-root.MuiOutlinedInput-root": {
                      borderRadius: "40px",
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ADFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 40,
                        border: `1px solid #54ADFF`,
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ADFF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ADFF",
                        borderWidth: "2px",
                      },
                    },
                  }}
                  onChange={handleChange}
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  size="small"
                  fullWidth
                  sx={{
                    ".MuiInputBase-root.MuiOutlinedInput-root": {
                      borderRadius: "40px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ADFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 40,
                        border: "1px solid #54ADFF",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ADFF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ADFF",
                        borderWidth: "2px",
                      },
                    },
                  }}
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  name="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  size="small"
                  fullWidth
                  sx={{
                    ".MuiInputBase-root.MuiOutlinedInput-root": {
                      borderRadius: "40px",
                      borderColor: "green",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ADFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 40,
                        border: errors.password
                          ? "1px solid #54ADFF"
                          : "1px solid #00C3AD",
                      },

                      "&:hover fieldset": {
                        borderColor: "#54ADFF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ADFF",
                        borderWidth: "2px",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {values.password && !errors.password && (
                          <CheckIcon
                            style={{ color: "#00C3AD", marginRight: "8px" }}
                          />
                        )}
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? (
                            <Visibility style={{ color: blue[300] }} />
                          ) : (
                            <VisibilityOff style={{ color: blue[300] }} />
                          )}
                        </IconButton>
                      </div>
                    ),
                  }}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={
                    touched.password &&
                    (errors.password ? (
                      <ErrorMessage name="password" />
                    ) : (
                      getIn(values, "password") && (
                        <span style={{ fontSize: 12, color: "#00C3AD" }}>
                          Password is secure
                        </span>
                      )
                    ))
                  }
                />
              </Box>
              <Box
                sx={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <TextField
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm password"
                  size="small"
                  fullWidth
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#54ADFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: 40,
                        border: errors.confirmPassword
                          ? "1px solid #54ADFF"
                          : "1px solid #00C3AD",
                      },
                      "&:hover fieldset": {
                        borderColor: "#54ADFF",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#54ADFF",
                        borderWidth: "2px",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {values.confirmPassword && !errors.confirmPassword && (
                          <CheckIcon
                            style={{ color: "#00C3AD", marginRight: "8px" }}
                          />
                        )}
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                          size="small"
                        >
                          {showConfirmPassword ? (
                            <Visibility
                              style={{
                                color: blue[300],
                              }}
                            />
                          ) : (
                            <VisibilityOff
                              style={{
                                color: blue[300],
                              }}
                            />
                          )}
                        </IconButton>
                      </div>
                    ),
                  }}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={
                    touched.confirmPassword &&
                    (errors.confirmPassword ? (
                      <ErrorMessage name="confirmPassword" />
                    ) : (
                      <span style={{ fontSize: 12, color: "#00C3AD" }}>
                        Passwords match
                      </span>
                    ))
                  }
                />
              </Box>
              <div className={css.buttonContainer}>
                <button type="submit" className={css.button}>
                  {"Registration"}
                </button>
              </div>
              <p className={css.questionText}>
                {"Already have an account?"}{" "}
                <Link to="/login" className={css.loginLink}>
                  {"Login"}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;
