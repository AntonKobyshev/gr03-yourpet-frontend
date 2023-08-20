import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { TextField, IconButton, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { loginSchema } from "../../shared/helpers/schemas";

import {
  selectIsLoading,
  selectIsLoggedIn,
} from "../../redux/auth/auth-selectors";
import { login } from "../../redux/auth/auth-operations";
import Loader from "../../shared/components/Loader/Loader";
import css from "./LoginForm.module.css";

const data = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFormSubmit = async (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    await dispatch(login(data));
    navigate("/user");
  };

  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoading && <Loader />}
      {isLoading && isLoggedIn && <Loader />}
      <div className={css.myСomponent}>
        <Formik
          initialValues={data}
          onSubmit={handleFormSubmit}
          validationSchema={loginSchema}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <Form className={css.form} onSubmit={handleSubmit}>
              <h2 className={css.title}>{"Login"}</h2>
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
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? (
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
                        {}
                      </IconButton>
                    ),
                  }}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <div className={css.buttonContainer}>
                <button type="submit" className={css.button}>
                  {"Login"}
                </button>
              </div>
              <p className={css.questionText}>
                {"Don't have an account?"}{" "}
                <Link to="/register" className={css.registerLink}>
                  {"Register"}
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
