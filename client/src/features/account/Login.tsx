import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { IconButton, InputAdornment, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from '../../app/store/configureStore';
import { signInUser } from './accountSlice';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const Login = () =>  {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //toggle password visibility func
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { 
    register, 
    handleSubmit, 
    formState: {isSubmitting, errors, isValid} } = useForm({
      mode: 'onBlur'
    });
  
  const submitForm = async (data: FieldValues) => {
    await dispatch(signInUser(data));
    navigate('/catalog');
  }

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container 
        component={Paper} 
        maxWidth="sm" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          mt: 4
        }}
      >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoComplete="current-username"
              autoFocus
              {...register('username', {required: 'Username is required'})}
              error={!!errors.username}
              helperText={errors?.username?.message as string}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register('password', {required: 'Password is required'})}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
            />
            <LoadingButton
              disabled={!isValid}
              loading={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link to='/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        {/* </Box> */}
      </Container>
    // </ThemeProvider>
  );
}

export default Login;