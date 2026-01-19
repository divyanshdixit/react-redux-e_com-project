import { TextField, Button, Stack, Typography, Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { PageWrapper, AuthCard, Title, SubTitle, StyledBox } from "./styles";
import { validateEmail, validatePassword } from "../../utils/validation";
import { useLoginMutation } from "../../redux/apiService/api";
import { setLogin } from "../../redux/feature/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const { email, password } = form;
      const formErrors = {};

      formErrors.email = validateEmail(email);
      // formErrors.password = validatePassword(password);

      if (Object.values(formErrors).some((item) => item)) {
        setErrors(formErrors);
        return;
      }

      console.log('hit loginapi')

      const res = await login({ email, password }).unwrap();
      console.log("login result ", res);

      if (res.accessToken) {
        dispatch(setLogin({ token: res.accessToken, user: res.user }));
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 500,
        });
        setTimeout(() => {
          navigate("/products");
        }, 500)
      }
    } catch (err) {
      if(err.data){
        toast.error(err.data, {
          position: "top-right",
          autoClose: 5000,
        });
      }
      console.log(err);
    }
  };

  return (
    <StyledBox>
      <PageWrapper height="85vh">
        <AuthCard>
          <Title>Welcome Back</Title>
          <SubTitle>Login to continue</SubTitle>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button type="submit" variant="contained" size="large" disabled={!(form.email && form.password)}>
                {isLoading ? <CircularProgress /> : 'Submit' }
              </Button>
            </Stack>
          </form>
          <Typography textAlign="center" mt={2}>
            Don’t have an account? Register
          </Typography>
        </AuthCard>
      </PageWrapper>
    </StyledBox>
  );
}
