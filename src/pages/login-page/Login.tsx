import './Login.scss';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField';
import { SignInForm } from '../../components/signin-form/Sign-in-form';
const FormValues = z.object({
  email: z.string().min(1, { message: 'Please enter an email!' }),
});

type FormValuesType = z.infer<typeof FormValues>;

export const Login = () => {
  const [signInState, setSignInState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesType>({ resolver: zodResolver(FormValues) });

  const onSubmit: SubmitHandler<FormValuesType> = () => setSignInState(true);

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_DEFAULT_BASE_IMG_URL})`,
      }}
    >
      <div className="login__container">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="netflix_logo"
        />
        <button className="login__sign-in">Sign In</button>
        <div className="login__gradient" />
      </div>
      <div className="login__body">
        {signInState ? (
          <SignInForm />
        ) : (
          <div>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <div className="login__form-container">
              <form
                className="login__form"
                onSubmit={handleSubmit(onSubmit)}
                role="presentation"
              >
                <div className="login__input-container">
                  <TextField
                    {...register('email')}
                    type="text"
                    id="email"
                    label="Email address"
                    disabled={isSubmitting}
                    variant="filled"
                    fullWidth
                  />
                  <button className="login__get-started-button">
                    Get Started
                  </button>
                </div>
                {errors.email && (
                  <h2 className="error-message">{errors.email.message}</h2>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
