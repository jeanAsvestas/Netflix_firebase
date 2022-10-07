/**
 * This context is needed so we dont have to configure our ReactKeycloakProvider
 * in every template/component that uses it.
 */

import { ReactKeycloakProvider } from '@react-keycloak/web';
import React, { createContext } from 'react';
import keycloak from './Keycloak';
import KeycloakChild from './KeycloakChild.component';

type Props = {
  children: React.ReactNode;
};

export type AuthContext = Record<string, unknown>;

const AuthContext = createContext({} as AuthContext);

const AuthProvider = ({ children }: Props) => {
  const value: AuthContext = {};

  return (
    <AuthContext.Provider value={value}>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={{
          onLoad: 'check-sso',
        }}
        onEvent={(event, error) => {
          console.log('onKeycloakEvent', event, error);
          console.log(event);
          if (event === 'onAuthLogout')
            sessionStorage.removeItem('pb-kc-token');
        }}
        onTokens={({ token }) => {
          if (token) sessionStorage.setItem('pb-kc-token', token);
        }}
      >
        <KeycloakChild>{children}</KeycloakChild>
      </ReactKeycloakProvider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
