import Grid from '@mui/material/Grid';
import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { useTranslation } from 'react-i18next';

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { t } = useTranslation();
  const { keycloak } = useKeycloak();

  if (keycloak.authenticated) return <>{children}</>;
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <button onClick={() => keycloak.login()}>Login</button>
      </Grid>
      <Grid item xs={12}>
        <small>{t('authGuard.loginText')}</small>
      </Grid>
    </Grid>
  );
};

export default AuthGuard;
