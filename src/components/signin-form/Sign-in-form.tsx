import './Sign-in-form.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@mui/material/TextField';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from '@firebase/util';

const FormValues = z.object({
  email: z.string().min(1, { message: 'Please enter an email!' }),
  password: z.string().min(1, { message: 'Please enter a password!' }),
});

type FormValuesType = z.infer<typeof FormValues>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValuesType>({ resolver: zodResolver(FormValues) });

  const onSubmit: SubmitHandler<FormValuesType> = async (data) => {
    console.log(data);
    console.log(auth);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res);
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.log(err.message);
        alert(err.message);
      }
    }
  };
  const onRegister: SubmitHandler<FormValuesType> = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(res);
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.log(err.message);
        alert(err.message);
      }
    }
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <form
        className="sign-in__form"
        onSubmit={handleSubmit(onSubmit)}
        role="presentation"
      >
        <div className="sign-in__input-container">
          <TextField
            {...register('email')}
            type="text"
            id="email"
            label="Email address"
            disabled={isSubmitting}
            variant="filled"
            fullWidth
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="sign-in__input-container">
          <TextField
            {...register('password')}
            type="password"
            id="password"
            label="Password"
            disabled={isSubmitting}
            variant="filled"
            fullWidth
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="login__sign-in-button">
          Sign In
        </button>
        <h4>
          <span style={{ color: 'grey' }}>New to Netflix?</span>
          <button
            type="button"
            className="login__sign-up-button"
            onClick={handleSubmit(onRegister)}
          >
            Sign Up now.
          </button>
        </h4>
      </form>
    </div>
  );
};
