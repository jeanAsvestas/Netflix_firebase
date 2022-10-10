import './Login.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

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
          <div>lets sign in</div>
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <div className="login__form-container">
              <form
                className="login__form"
                onSubmit={handleSubmit(onSubmit)}
                role="presentation"
              >
                <input
                  {...register('email', { required: true })}
                  type="text"
                  id="email"
                  placeholder="Email address"
                  disabled={isSubmitting}
                />
                <button className="login__get-started-button">
                  Get Started
                </button>
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
