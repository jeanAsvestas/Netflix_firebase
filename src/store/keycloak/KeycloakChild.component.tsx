import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';

type KeycloakChildProps = {
  children: React.ReactNode;
};

const KeycloakChild = ({ children }: KeycloakChildProps) => {
  const { initialized, keycloak } = useKeycloak();

  useEffect(() => {
    if (keycloak && initialized) {
      keycloak.onTokenExpired = () => {
        keycloak.updateToken(350);
      };
    }
  }, [initialized, keycloak]);
  return <>{children}</>;
};

export default KeycloakChild;
